<script>
	import favicon from '$lib/assets/favicon.svg'
	import '/src/app.css'
	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/" class="title-head">PlainPlates</a>
	<div>
		<a href="/">Home</a>
		<a href="/recipes">Recipes</a>
	</div>
</nav>

{@render children()}

<footer>
	<strong>PlainPlates</strong> - <i>Simple recipes made for real people.</i>
</footer>

<style>
	nav, footer {
		border: 2px black solid;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}

	.title-head {
		padding: 5px 0;
		color: var(--font-color);
		text-decoration: none;
	}
</style>