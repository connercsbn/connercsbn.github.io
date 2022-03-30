<script>
	import { onMount } from 'svelte';
	import '@fontsource/roboto-slab';
	export let title;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Andada+Pro:wght@300;500&family=PT+Serif:wght@400;700&family=Raleway:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<h1>{title}</h1>
	<p><slot /></p>
</main>

<style lang="scss">
	:root {
		--albumsplit-background: #1c1e21;
		--albumsplit-background-transparent: #1c1e21d4;
	}
	main {
		position: relative;
		z-index: 0;
		background: url('/images/albumsplit-full-page.png') top right no-repeat;
		background-color: #1c1e21;
		background-size: contain;
		background-size: 80%;
		background-attachment: fixed;
		background-position-y: 42%;
		padding-bottom: 20%;
		box-shadow: inset 0 0 0 2000px #1c1e214a;
	}
	h1 {
		padding: 0.5em 5%;
		margin: 0;
		box-shadow: -1px 10px 0px -8px #8ec07c inset;
		color: #83a598;
		font-family: Roboto Slab;
		font-weight: 500;
		font-size: 8vw;
		line-height: 1.2;
		letter-spacing: -0.00833em;
		text-decoration: underline #8ec07c 0.5vw;
		position: relative;
		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #1c1e21de;
			box-shadow: 2px 60px 60px 60px var(--albumsplit-background-transparent);
			z-index: -1;
		}
	}
	p {
		padding: 0 5%;
		font-size: 2.5vw;
		position: relative;
		background: var(--albumsplit-background-transparent);
		box-shadow: 2px 0px 35px 68px var(--albumsplit-background-transparent);
	}
</style>
