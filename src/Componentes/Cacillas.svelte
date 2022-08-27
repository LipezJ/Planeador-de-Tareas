<script>
    import Cacilla from "./Cacilla.svelte";

    let pos = {
        xi: 0, yi: 0, x: 0, y: 0, x_: 0, y_: 0,
        xf: 0, yf: 0,
        ai: 0, a: 0, pos: "static",
    };
    let combinaciones = [[1,2,0], [2,0,1], [0,1,2], [1,0,2], [0,2,1], [2,1,0]]
    let comb = {}
    let med = { x1: 0, y1: 0, x2: 0, y2: 0 };
    let posiciones = [];
    let def = true;

    function definir() {
        if (def) {
            //medida del contenedor
            let main = document.querySelectorAll("#main")[0];
            let largo = main.clientHeight,
                ancho = main.clientWidth;
            med.x1 = main.offsetTop;
            med.y1 = main.offsetLeft;
            med.x2 = med.x1 + ancho;
            med.y2 = med.y2 + largo;

            //medidas de las cacillas
            let cacilla_ = document.querySelectorAll(".cacilla_");
            let cacilla = document.querySelectorAll(".cacilla");
            let posiciones_ = [];
            for (let i = 0; i < cacilla_.length; i++) {
                posiciones_.push(cacilla_[i].offsetTop);
                posiciones_.push(cacilla_[i].offsetLeft);
                posiciones_.push(cacilla_[i].clientHeight + posiciones_[0] - 1);
                posiciones_.push(cacilla_[i].clientWidth + posiciones_[1] - 1);
                comb[i] = [posiciones_[1], posiciones_[0]]
                posiciones.push(posiciones_);
                posiciones_ = [];
            }
            console.log(posiciones)
            //cerrando las definiciones
            def = false;
        }
    }

    function clic(event) {
        let actual = document.querySelectorAll(".cacilla_");
        pos.difx = pos.x_;
        pos.dify = pos.y_;
        pos.xi = event.clientX;
        pos.yi = event.clientY;
        pos.ai = pos.a;
        pos.pos = "absolute";
        actual[pos.ai].style.position = pos.pos;
    }
    function clicnt() {
        let actual = document.querySelectorAll(".cacilla_");
        pos.pos = "static";

        for (let i = 0; i < posiciones.length; i++) {
            if (pos.a == i){
                console.log(i, pos.ai)
                cambiar(i)
            }
        }
        actual[pos.ai].style.position = pos.pos;
    }
    function cambiar(i) {
        let tabla = document.querySelectorAll(".cacilla_");
        let t_ = tabla[pos.ai].innerHTML
        tabla[pos.ai].innerHTML = tabla[i].innerHTML
        tabla[i].innerHTML = t_
        console.log(t_)
    }

    function moviendo(event) {
        pos.x = event.clientX;
        pos.y = event.clientY;

        if (def != true) {
            for (let i = 0; i < posiciones.length; i++) {
                if (
                    pos.y > posiciones[i][0] &&
                    pos.x > posiciones[i][1] &&
                    pos.y < posiciones[i][2] &&
                    pos.x < posiciones[i][3]
                ) {
                    pos.a = i;
                }
            }
        }
        
    }
    function moviendo_g(event) {
        if (def != true) {
            pos.x_ = posiciones[pos.a][1] - event.clientX + 1;
            pos.y_ = posiciones[pos.a][0] - event.clientY + 1;
        }
    }
</script>

<main on:mousemove={moviendo} on:mousemove={definir} id="main">
    <div class="cacilla" on:mousedown={clic} on:mouseup={clicnt}>
        <div
            style="
        top: {pos.y + pos.dify + 'px'};
        left: {pos.x + pos.difx + 'px'};
    "
            id="1"
            class="cacilla_"
            on:mousemove={moviendo_g}
        >
            <Cacilla Hora="Uno" />
        </div>
    </div>
    <div class="cacilla" on:mousedown={clic} on:mouseup={clicnt}>
        <div
            style="
            top: {pos.y + pos.dify + 'px'};
            left: {pos.x + pos.difx + 'px'};
        "
            id="2"
            class="cacilla_"
            on:mousemove={moviendo_g}
        >
            <Cacilla Hora="Dos" />
        </div>
    </div>
    <div class="cacilla" on:mousedown={clic} on:mouseup={clicnt}>
        <div
            style="
                top: {pos.y + pos.dify + 'px'};
                left: {pos.x + pos.difx + 'px'};
            "
            id="3"
            class="cacilla_"
            on:mousemove={moviendo_g}
        >
            <Cacilla Hora="Treh" />
        </div>
    </div>
    
</main>

<style>
    * {
        -webkit-user-select: none; /* Chrome  y Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE 10+ */
        user-select: none;
    }
    main {
        background-color: aquamarine;

        width: 95%;
        height: 95%;
        margin: 0px;
        margin-top: 10px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        gap: 10px;
        row-gap: 10px;
        border-radius: 30px;
    }

    .cacilla_ {
        background-color: aquamarine;

        max-width: 100%;
        border-radius: 30px;

        display: none;
    }
</style>
