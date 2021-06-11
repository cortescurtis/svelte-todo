<script>
	import Header from './components/Header/header.svelte';
	import Todo from './components/Todo/todo.svelte';
	import Footer from './components/Footer/footer.svelte';

	let name = 'New User';
</script>

<Header {name}/>
<Todo />
<Footer />