<script>
    import Objetivos from './Componentes/Objetivos.svelte'
    import Planeador from './Componentes/Planeador.svelte'
    import Cacillas from './Componentes/Cacillas.svelte';
import Cacilla from './Componentes/Cacilla.svelte';
</script>

<main>
    <Objetivos></Objetivos>
    <Planeador/>
    <!--<Cacillas/>-->
</main>

<style>
    *{  
        margin: 10px;
    }
	main{
        display: flex;
    }
</style>