<script>
    let posiciones = [];
    let def = true;
    let moviendo = false;
    let pos = { x: 28, y: 28, dif_x: 0, dif_y: 0 };
    let mov = { x: 0, y: 0 };
    let largo, ancho;

    function definir() {
        if (def) {
            def = false;
            let posiciones_ = [];
            let tabla = document.querySelectorAll(".cont");
            largo = tabla[0].clientHeight;
            ancho = tabla[0].clientWidth;
            for (let i = 0; i < tabla.length; i++) {
                posiciones_.push(tabla[i].offsetTop);
                posiciones_.push(tabla[i].offsetLeft);
                posiciones.push(posiciones_);
                posiciones_ = [];
            }
        }
    }
    function tamaño() {
        //definir tamaño
        let contenedor = document.querySelectorAll("#cont1")[0];
    }
    function posicion(event) {
        let cont1 = document.querySelectorAll("#cont1")[0];
        pos.x_ = event.clientX;
        pos.y_ = event.clientY;
        if (moviendo) {
        }
    }
    function posicion_g(event) {
        if (moviendo) {
            pos.x = event.clientX + pos.dif_x;
            pos.y = event.clientY + pos.dif_y;
        }
    }
    function clic() {
        //posicion inicial del elemento
        mov.x = pos.x;
        mov.y = pos.y;
        //calculando diferencia
        pos.dif_x = mov.x - pos.x_;
        pos.dif_y = mov.y - pos.y_;
        moviendo = true;
    }
    function clicnt() {
        moviendo = false;
        let x_ = pos.x_,
            y_ = pos.y_,
            j = 0;
        tamaño();
        for (let i = 0; i < posiciones.length; i++) {
            if (
                y_ > posiciones[i][0] &&
                x_ > posiciones[i][1] &&
                y_ < posiciones[i][0] + largo + 10 &&
                x_ < posiciones[i][1] + ancho + 10
            ) {
                pos.x = posiciones[i][1];
                pos.y = posiciones[i][0];
            }
        }
        let main = document.querySelectorAll("#planeador")[0];
        let max = [
            main.offsetLeft + main.clientWidth,
            main.offsetTop + main.clientHeight,
        ];
        if (max[0] < x_ || max[1] < y_) {
            pos.x = mov.x;
            pos.y = mov.y;
        }
    }
</script>

<main id="planeador">
    <div
        id="tabla"
        on:mousemove={posicion_g}
        on:mouseover={definir}
        on:focus={definir}
    >
        <div id="1" class="cont" />
        <div id="2" class="cont" />
        <div id="3" class="cont" />
        <div id="4" class="cont" />
        <div id="5" class="cont" />
        <div id="6" class="cont" />
        <div id="7" class="cont" />
        <div id="8" class="cont" />
        <div id="9" class="cont" />
        <div id="10" class="cont" />
        <div id="11" class="cont" />
        <div id="12" class="cont" />
        <div id="13" class="cont" />
        <div id="14" class="cont" />
        <div id="15" class="cont" />
    </div>
    <div
        style="display: aboslute; top: {pos.y + 'px'};left: {pos.x +
            'px'};width: {ancho + 'px'};height: {largo + 'px'};"
        id="cont1"
        on:mouseup={clicnt}
        on:mousedown={clic}
        on:mousemove={posicion}
        on:mousemove={posicion_g}
    />
    <span>x:{pos.x}</span>
    <span>y:{pos.y}</span>
    <span>x_:{pos.x_}</span>
    <span>y_:{pos.y_}</span>
</main>

<style>
    #tabla {
        background-color: aquamarine;

        width: 600px;
        height: 300px;
        padding: 10px;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 10px;
        row-gap: 10px;
    }
    .cont {
        background-color: aqua;
    }
    #cont1 {
        color: aliceblue;
        background-color: blue;

        position: absolute;
        top: 28px;
        left: 323px;
    }
</style>
