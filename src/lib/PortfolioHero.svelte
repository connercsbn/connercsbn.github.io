<script>
	import '@fontsource/roboto-slab';
	import '@fontsource/roboto';
	import '@fontsource/andada-pro';
	import Links from '$lib/Links.svelte';

	export let title;
	export let source;
	export let link;
	export let background;
	let showLinks = false;

	const handleMouseOver = () => {
		showLinks = true;
	};
	const handleMouseLeave = () => {
		showLinks = false;
	};
</script>

<main>
	{#if background == 'tts'}
		<div class="bg-container">
			<div class="bg-trapezoid" />
			<div class="bg-circle" />
			<div class="bg-rect" />
		</div>
	{:else}
		<video autoplay muted loop playsinline>
			<source src={source} type="video/mp4" />
		</video>
	{/if}
	<h1
		on:focus={handleMouseOver}
		on:mouseover={handleMouseOver}
		on:mouseleave={handleMouseLeave}
		href={link}
	>
		{#if showLinks}
			<Links />
		{/if}
		{title[0]}{#if title[1]}<br />{title[1]}{/if}
	</h1>
	<p><slot /></p>
</main>

<style lang="scss">
	@font-face {
		font-family: 'Brandon Grotesque';
		src: url('/webfonts/brandon_bld.woff');
	}
	@font-face {
		font-family: 'fg';
		src: url('/webfonts/fg.woff');
	}

	main {
		position: relative;
		background: var(--opaque-background);
		overflow: hidden;
		border: 2px solid var(--border-color);
		margin: 30px;
		padding: 4%;
	}
	.bg-container {
		background: #fbf7e4;
		position: relative;
		top: 0;
		left: 0;
	}
	.bg-trapezoid {
		clip-path: polygon(0% 43.5%, 100% 100%, 100% 95%, 0% -40%);
		background-color: rgba(187, 200, 179, 0.6);
		animation-duration: 10s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-name: spotlight;
	}
	.bg-circle {
		clip-path: circle(15% at -4% 90%);
		background-color: #2f4858;
	}
	.bg-rect {
		clip-path: polygon(97% 0%, 100.8% 0%, 87% 100%, 83% 98.3%);
		background-color: #eb2329;
		animation-duration: 8s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-name: stripe;
	}
	.bg-container {
		position: absolute;
		width: 100%;
		height: 130%;
		top: var(--video-top, 0);
	}

	.bg-trapezoid,
	.bg-circle,
	.bg-rect {
		position: absolute;
		height: 100%;
		width: 100%;
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
		padding: none;
	}
	h1 {
		user-select: none;
		display: inline-block;
		position: relative;
		padding: 0;
		margin: 0;
		color: var(--font-color, black);
		font-family: var(--font, 'Roboto');
		font-weight: 600;
		font-size: var(--font-size);
		line-height: 1;
		position: relative;
		// text-decoration: var(--text-decoration, underline);
		text-decoration-color: #8ec07c;
		text-decoration-thickness: 0.5vw;
		text-underline-offset: 1vw;
		letter-spacing: var(--letter-spacing, 0);
		-webkit-text-stroke: var(--text-stroke, none);
		z-index: 1;
		&:link {
			text-decoration: none;
		}
		&:hover {
			text-shadow: 0.6vw 0.6vw 0px var(--shadow-color);
		}
	}
	p {
		color: var(--custom-background-color);
		padding: 0 2%;
		font-size: 3.5vw;
		position: relative;
	}
	@keyframes stripe {
		from {
			clip-path: polygon(97% 0%, 100.8% 0%, 87% 100%, 83% 98.3%);
		}
		to {
			clip-path: polygon(100% 0%, 103% 0%, 87% 100%, 83% 98.3%);
		}
	}
	@keyframes spotlight {
		from {
			clip-path: polygon(0% 43.5%, 100% 100%, 100% 95%, 0% -40%);
		}
		to {
			clip-path: polygon(0% 43.5%, 100% 100%, 100% 100%, 0% -80%);
		}
	}
</style>
