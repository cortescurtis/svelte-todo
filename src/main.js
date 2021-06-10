import App from './App.svelte';

const todoApp = new App({
	target: document.body,
	props: {
		name: ''
	}
});

export default todoApp;