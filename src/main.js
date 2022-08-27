import { MACCE_BIN } from 'mysql/lib/protocol/constants/charsets';
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		Hora: "7:00 am",
		Descripcion: "Cardio",
		Objetivo: "Ejercicio"
	}
});

export default app;