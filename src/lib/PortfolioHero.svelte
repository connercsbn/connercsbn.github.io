<script>
	import '@fontsource/roboto-slab';
	import '@fontsource/roboto';
	import '@fontsource/andada-pro';
	import Arrow from '$lib/Arrow.svelte';
	import { onMobileDevice } from '$lib/stores';
	import { clickOutside } from './clickOutside.js';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let title;
	export let source = '/';
	export let link;
	export let githubLink = '/';
	export let background = 'not tts';
	export let arrowColor;
	let showLinks = false;
	let pillIsClicked = false;

	const handlePillUncLick = (e) => {
		e.preventDefault();
		pillIsClicked = false;
	};
	const handlePillCLick = (e) => {
		e.preventDefault();
		pillIsClicked = true;
	};
	const yOffset = tweened(0, {
		duration: 300,
		easing: cubicOut
	});

	$: if (showLinks) {
		yOffset.set(-140);
	} else {
		yOffset.set(0);
	}
	const changeShowLinks = () => {
		showLinks = !showLinks;
	};
</script>

<div class="container">
	<div
		class="hero"
		use:clickOutside
		on:click_outside={() => {
			showLinks = false;
		}}
	>
		{#if background == 'tts'}
			<div class="bg-container">
				<div class="bg-trapezoid" />
				<div class="bg-circle" />
				<div class="bg-rect" />
			</div>
		{:else if !$onMobileDevice}
			<video autoplay muted loop playsinline>
				<source src={source} type="video/mp4" />
			</video>
		{/if}
		<h3 on:click={changeShowLinks}>
			{title}
		</h3>
		<div class="info-display">
			<div style={`transform: translate(0, ${$yOffset}%);`} class="github-link">
				<a
					target="_blank"
					href={link}
					class:pill-is-clicked={pillIsClicked}
					on:mousedown={handlePillCLick}
					on:mouseup={handlePillUncLick}
					on:mouseleave={handlePillUncLick}
					><svg width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
						><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"
						/></svg
					>Visit</a
				>
				<a
					target="_blank"
					href={githubLink}
					class:pill-is-clicked={pillIsClicked}
					on:mousedown={handlePillCLick}
					on:mouseup={handlePillUncLick}
					on:mouseleave={handlePillUncLick}
				>
					<svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
						><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
						/></svg
					>
					Github</a
				>
			</div>
			<div class="info" style={`transform: translate(0, ${$yOffset}%);`}><p><slot /></p></div>
			<Arrow {showLinks} {arrowColor} onclick={changeShowLinks} />
		</div>
	</div>
</div>

<style lang="scss">
	.github-link {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 160%;
		left: 0;
		color: var(--custom-background-color, black);
		display: flex;
		justify-content: center;
		& a {
			height: min-content;
			width: min-content;
			margin: 0.2em;
			display: flex;
			padding: 1rem;
			border-radius: 30px;
			border: 1px solid var(--custom-text-color, black);
			border: 1px solid black;
			color: var(--custom-text-color);
			color: black;
			background: var(--custom-nav-color, white);
			transition: all 0.2s;
			&:hover {
				// background: white;
				transform: translate3d(-5px, -5px, 0);
				box-shadow: 5px 5px 0px 0px var(--custom-secondary-color, black);
				// color: var(--custom-secondary-color);
				// & svg {
				// 	fill: var(--custom-secondary-color);
				// }
				// font-style: italic;
			}
		}
		& svg {
			fill: black;
			padding-right: 6px;
		}
	}
	.info-display {
		position: relative;
		overflow: hidden;
	}
	.info {
		display: flex;
		flex-direction: column;
		color: var(--explicit-p-color, var(--custom-background-color));
		padding: 0;
		// margin: 1.3em 0;
		font-size: var(--p-font-size);
		font-weight: bold;
		position: relative;
	}
	@font-face {
		font-family: 'Brandon Grotesque';
		src: url('/webfonts/brandon_bld.woff');
	}
	@font-face {
		font-family: 'fg';
		src: url('/webfonts/fg.woff');
	}

	.container {
		position: relative;
		background: var(--opaque-background);
		overflow: hidden;
		// border: 2px solid var(--border-color);
		// border: 0.3em solid var(--custom-secondary-color);
		border: 1px solid var(--custom-text-color, black);
		// box-shadow: 0.3em 0.3em 0px 0px var(--custom-secondary-highlight-color, black);
		margin: min(30px, max(1.1%, 10px)) auto;
		padding: 5% 4% 3.5%;
		&::after {
			content: '';
			width: 100%;
			height: 100%;
			background: black;
			z-index: -1;
			top: 0;
			bottom: 30px;
			left: 30px;
			position: absolute;
		}
	}
	.hero {
		max-width: 800px;
		margin: auto;
	}
	.bg-container {
		background: #fbf7e4;
		position: relative;
		top: 0px;
		left: 0;
	}
	.bg-trapezoid {
		clip-path: polygon(0% 43.5%, 100% 100%, 100% 95%, 0% -40%);
		background-color: rgba(187, 200, 179, 0.6);
	}
	.bg-circle {
		clip-path: circle(10% at -4% 70%);
		background-color: #2f4858;
	}
	.bg-rect {
		clip-path: polygon(97% 0%, 100.8% 0%, 87% 100%, 83% 98.3%);
		background-color: #eb2329;
	}
	.bg-container {
		position: absolute;
		width: 100%;
		height: 130%;
		top: var(--video-top, 0);
		top: 0;
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
		top: 0;
		opacity: 0.1;
	}
	a {
		text-decoration: none;
		padding: none;
	}
	h3 {
		position: relative;
		user-select: none;
		cursor: pointer;
		display: inline-block;
		width: 100%;
		text-align: center;
		padding: 0;
		margin: 0 auto;
		color: var(--font-color, black);
		font-family: var(--font, 'Roboto');
		font-weight: 700;
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
			text-shadow: 4px 4px 0px var(--shadow-color);
		}
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
	.github-link > a.pill-is-clicked {
		transform: translate3d(0px, 0px, 0px);
		box-shadow: 0px 0px 0px 0px var(--custom-text-color);
	}
</style>
