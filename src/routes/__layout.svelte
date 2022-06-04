<script>
	import '../app.scss';
	import '@fontsource/roboto';
	import '@fontsource/ibm-plex-serif';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { open } from '$lib/stores';
	import { color, colorMode } from '$lib/stores';
	import LCH_to_sRGB_string from '$lib/lch.js';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';

	let startingColor = 206.5;
	let scrollY;
	let chromaSat = 70; // was 70, then 30
	let brightness = 85; // was 95
	let orangutanTop = 0;

	const right = tweened(1, {
		duration: 300,
		easing: cubicOut
	});

	$: $right = $open ? 300 : 0;

	$: orangutanTop = 1 + scrollY / (clientY / 90);

	let startX, startY, moveX, moveY, clientY;

	onMount(() => {
		fullHeight = Math.max(body.scrollHeight, body.offsetHeight);
		console.log(height);
	});

	function touchStart(e) {
		startX = e.touches[0].clientX;
		startY = e.touches[0].clientY;
	}

	function touchMove(e) {
		moveX = e.touches[0].clientX;
		moveY = e.touches[0].clientY;
	}

	function touchEnd() {
		if (startX - 10 > moveX) {
			// swipe left
			if (startY + 20 < moveY || startY - 20 > moveY) {
				// swipe up or down twice as much as right (so not a true swipe right)
			} else {
				$open = false;
			}
		}
		if (startY + 10 < moveY) {
			status = 'down';
		} else if (startY - 10 > moveY) {
			status = 'up';
		}
	}

	function handleKeyDown({ key }) {
		if (key == 'Escape') $open = false;
	}
	$: customStyle =
		`--right-transform: ${$right}px;` +
		($colorMode
			? `
    --custom-background-color: ${LCH_to_sRGB_string(
			brightness,
			chromaSat,
			$color || startingColor,
			100,
			false
		)};
    --custom-arrow-color: ${LCH_to_sRGB_string(80, 20, $color || startingColor, 100, true)};
    --custom-text-color: ${LCH_to_sRGB_string(0, 40, $color || startingColor)};
    --custom-background-light: ${LCH_to_sRGB_string(100, 20, $color || startingColor)};
    --custom-secondary-color: ${LCH_to_sRGB_string(
			40,
			100,
			(($color || startingColor) + 180) % 360,
			100,
			false
		)};
    --custom-nav-color: ${LCH_to_sRGB_string(
			90,
			20,
			(($color || startingColor) - 100) % 360,
			100,
			false
		)};
    --custom-secondary-highlight-color: ${LCH_to_sRGB_string(
			45,
			35,
			(($color || startingColor) + 180) % 360,
			100,
			true
		)};`
			: ` `);
</script>

<svelte:window
	on:touchstart={touchStart}
	on:touchmove={touchMove}
	on:touchend={touchEnd}
	on:keydown={handleKeyDown}
	bind:scrollY
	bind:outerHeight={clientY}
/>

<main style={customStyle}>
	<div class="main-page">
		<Header />
		<Nav --right-transform="{$right - 300}px" />
		<div class="content">
			<div class="orangutan-container">
				<div class="first-orangutan" style="transform: translate3d(0, {orangutanTop}vh, 0);" />
				<div class="second-orangutan" style="transform: translate3d(0, {orangutanTop}vh, 0);" />
				<div class="third-orangutan" style="transform: translate3d(0, {orangutanTop}vh, 0);" />
			</div>
			<slot />
		</div>
	</div>
</main>

<style>
	main {
		position: relative;
		overflow: hidden;
		top: 65px;
		background: var(--custom-background-color);
		min-height: 100vh;
	}
	.main-page {
		position: relative;
		flex-grow: 1;
		background: var(--background-color);
		background: var(--custom-background-color);
		/* color: var(--custom-text-color); */
		color: black;
	}
	.content {
		position: relative;
		padding: min(3vw, 30px);
		transform: translate3d(var(--right-transform), 0, 0);
	}
	.orangutan-container {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: -1;
	}
	.first-orangutan,
	.second-orangutan,
	.third-orangutan {
		position: absolute;
		background: #ffab7b;
		mask-image: image(url('/orangutan-glasses.svg'));
		-webkit-mask-image: url('/orangutan-glasses.svg');
		mask-size: cover;
		-webkit-mask-size: cover;
		width: 600px;
		height: 600px;
		mask-position: center;
		-webkit-mask-position: center;
	}
	.first-orangutan {
		top: 0;
		right: 0;
		clip-path: circle(243px at 323px 242px);
	}
	.second-orangutan {
		top: 200px;
		left: 0px;
		clip-path: circle(244px at 315px 244px);
	}
	.third-orangutan {
		top: 1000px;
		left: 200px;
		clip-path: circle(253px at 320px 252px);
	}
</style>
