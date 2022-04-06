<script>
	import { onMount } from 'svelte';
	import '@fontsource/roboto-slab';
	export let title;
	export let source;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Andada+Pro:wght@300;500&family=PT+Serif:wght@400;700&family=Raleway:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<video autoplay muted loop playsinline>
		<source src={source} type="video/mp4" />
	</video>
	<a href="google.com"><h1>{title}</h1></a>
	<p><slot /></p>
</main>

<style lang="scss">
	:root {
		--albumsplit-background: #1c1e21;
		--albumsplit-background-transparent: #1c1e21d4;
	}
	main {
		position: relative;
		background: var(--albumsplit-background);
		overflow: hidden;
		padding: 2.4em 1em;
	}
	video {
		right: 0;
		position: absolute;
		width: var(--video-width);
		top: var(--video-top);
		opacity: 0.2;
	}
	a {
		text-decoration: none;
	}
	a h1 {
		padding: 0 5%;
		margin: 0;
		color: #83a598;
		font-family: Roboto Slab;
		font-weight: 500;
		font-size: 8vw;
		line-height: 1.2;
		letter-spacing: -0.00833em;
		position: relative;
		text-decoration: underline;
		text-decoration-color: #8ec07c;
		text-decoration-thickness: 0.5vw;
		text-underline-offset: 1vw;
		&:link {
			text-decoration: none;
		}
		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		&:hover {
			text-decoration: underline #8ec07c 0.5vw;
		}
	}
	p {
		padding: 0 5%;
		font-size: 2.5vw;
		position: relative;
	}
</style>
