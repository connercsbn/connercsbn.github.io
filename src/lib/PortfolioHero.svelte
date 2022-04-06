<script>
	import '@fontsource/roboto-slab';
	import '@fontsource/roboto';
	import '@fontsource/andada-pro';

	export let title;
	export let source;
	export let link;
</script>

<main>
	<video autoplay muted loop playsinline>
		<source src={source} type="video/webm" />
	</video>
	<a href={link}><h1>{title}</h1></a>
	<p><slot /></p>
</main>

<style lang="scss">
	@font-face {
		font-family: 'fg';
		src: url('/webfonts/fg.woff');
	}

	main {
		position: relative;
		background: var(--opaque-background);
		overflow: hidden;
		padding: 8% 1em;
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
		color: var(--font-color, black);
		font-family: var(--font, 'Roboto');
		font-weight: 500;
		font-size: var(--font-size);
		line-height: 1.2;
		position: relative;
		text-decoration: var(--text-decoration, underline);
		text-decoration-color: #8ec07c;
		text-decoration-thickness: 0.5vw;
		text-underline-offset: 1vw;
		letter-spacing: var(--letter-spacing, 0);
		-webkit-text-stroke: var(--text-stroke, none);
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
	}
	p {
		padding: 0 5%;
		font-size: 2.5vw;
		position: relative;
	}
</style>
