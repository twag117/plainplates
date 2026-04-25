<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<p>PlainPlates</p>
	<a href="/">Home</a>
	<a href="/recipes">Recipes</a>
</nav>

{@render children()}

<footer>
	<strong>PlainPlates</strong> - <i>Simple recipes made for real people.</i>
</footer>