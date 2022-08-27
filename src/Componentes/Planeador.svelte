<script>
    import Cacillas from './Cacillas.svelte'
</script>

<main>
	<div id="encabezado">
        <h1>Planeador</h1>
        <h4>semana del 14 al 18 de marzo</h4>
    </div>
    <div id="planeador">
        <div id="dias">
            <ul>
                <li>Lunes</li>
                <li>Martes</li>
                <li>Miércoles</li>
                <li>Jueves</li>
                <li>Viernes</li>
            </ul>
        </div>
        <div id="planeador-tabla">
            <div id="lunes" class="tabla"><Cacillas/></div>
            <div id="Martes" class="tabla"><Cacillas/></div>
            <div id="Miercoles" class="tabla"><Cacillas/></div>
            <div id="Jueves" class="tabla"><Cacillas/></div>
            <div id="Viernes" class="tabla"><Cacillas/></div>
        </div>
    </div>
</main>

<style>
	main{
        background-color: aquamarine;
        color: aliceblue;

        width: 75%;
        height: 620px;
        border-radius: 30px;
    }
    #encabezado{
        background-color: blueviolet;

        width: 30%;
        padding: 5px;
        padding-left: 20px;
        margin: 10px;
        border-radius: 30px;
    }
    #planeador{
        background-color: aqua;

        padding: 0px 5px;
        margin: 10px;
        border-radius: 30px;
    }
    ul{
        padding: 0px;

        list-style: none;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
        justify-items: center;
    }
    li{
        margin-top: 5px;
    }
    #planeador-tabla{
        height: 400px;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
        justify-items: center;
    }
    .tabla{
        background-color:black;

        width: 100%;
        height: 98%;
        margin-bottom: 10px;
        border-radius: 30px;

        display: flex;
        justify-content: center;
    }
</style>