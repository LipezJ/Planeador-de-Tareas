<script>
    export let Hora;
    export let Descripcion;
    export let Objetivo;

    function jaja() {
        console.log("jaja")
    }
</script>

<main>
    <div>
        <h3 on:dblclick={jaja}>{Hora}</h3>
        <h5>{Descripcion}</h5>
    </div>
    <h4 id="objetivo">{Objetivo}</h4>
</main>

<style>
    *{
        color: aliceblue;

        padding: 5px;
        margin: 0px;
    }
    main{
        background-color: aqua;
        width: 95%;
        height: 100%;
        margin: auto;
        
        border-radius: 30px;
    }
    div{
        background-color: blue;
        border-radius: 30px;
    }
    #objetivo{
        margin-top: 5px;
        margin-left: 15px;
    }
</style>