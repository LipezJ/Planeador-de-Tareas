<script>
    import Objetivo from './Objetivo.svelte'

    let tarea_ = ""

    function agregar() {
        if (document.getElementById("agregar-tarea").value != "") {
            let Obj = new Objetivo({
                target: document.getElementById("lista-objetivos"),
                props: {
                    tarea: tarea_
                }
            })
            document.getElementById("agregar-tarea").value = ""
        }
    }
</script>

<main>
    <h2>Objetivos</h2>
    <div id="lista-objetivos">
        <h4>Lo que quiero lograr</h4>
    </div>
    <div>
        <form>
            <input name="tarea" type="text" bind:value={tarea_} id="agregar-tarea"
                placeholder="agregue nueva tarea">
            <button for="tarea" id="agregar" on:click={agregar} type="button">+</button>
        </form>
    </div>
</main>

<style>
    
    main{
        background-color: aqua;
        color: aliceblue;
        border-radius: 20px;

        width: 25%;
        margin-right: 10px;
        height: 620px;
    }
    h2{
        background-color: red;

        padding: 10px;
        margin: 0px;
        border-radius: 20px;
    }
    h4{
        background-color: blue;

        padding: 10px;
        margin: 0px;
        border-radius: 20px;
    }
    #lista-objetivos{
        background-color: aquamarine;

        width: 100%;
        height: 82%;
        padding-bottom: 5px;
        border-radius: 20px;
    }
    form{
        padding: 5px;
    }
    #agregar{
        background-color: brown;
        color: aliceblue;
        border: 2px solid brown;

        width: 25%;
        height: 100%;
        border-radius: 30px;
    }
    #agregar:hover{
        border: 2px solid rgb(0, 0, 0);
    }
    #agregar-tarea{
        border: none;

        width: 70%;
        border-radius: 30px;
    }
</style>