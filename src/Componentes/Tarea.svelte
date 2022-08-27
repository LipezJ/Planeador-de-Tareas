<script>
    export let Hora;
    export let Descripcion;
    export let Objetivo;
</script>

<main>
    <div id="descripcion">{Objetivo}</div>
    <div id="principal">
        <h3>{Hora}</h3>
        <h6>{Descripcion}</h6>
    </div>
</main>

<style>
    main{
        background-color: aquamarine;
        color: aliceblue;

        width: 300px;
        height: 300px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }
    
    #descripcion{
        color: black;
        width: 25px;
        transform: rotate(90deg);
    }
    #principal{
        background-color: aqua;
        display: none;
        width: 90px;
    }
</style>