<script>
    export let tarea;
</script>

<main>
	<div id="objetivo">
        <div id="contenido" class="objetivo">{tarea}</div>
    </div>
</main>

<style>
	#objetivo{
        background-color: brown;

        width: auto;
        height: 20px;
        margin: 15px;
        padding: 10px;
        border-radius: 30px;

        display: flex;
    }
    .objetivo{
        margin: 0px 5px;
    }
</style>