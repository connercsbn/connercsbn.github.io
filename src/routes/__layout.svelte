<script>
	import '../app.scss';
	import '@fontsource/roboto';
	import '@fontsource/ibm-plex-serif';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { open } from '$lib/stores';
	import { color, colorTwo, colorMode } from '$lib/stores';
	import LCH_to_sRGB_string from '$lib/lch.js';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';

	let startingColor = 206.5;
	let scrollY;
	let chromaSat = 30; // was 70

	const right = tweened(1, {
		duration: 300,
		easing: cubicOut
	});

	$: {
		$right = $open ? 300 : 0;
	}

	let startX, startY, moveX, moveY, status;

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
			95,
			chromaSat,
			$color || startingColor,
			100,
			false
		)};
    --custom-arrow-color: ${LCH_to_sRGB_string(80, 20, $color || startingColor, 100, true)};
    --custom-text-color: ${LCH_to_sRGB_string(0, 40, $color || startingColor)};
    --custom-background-light: ${LCH_to_sRGB_string(100, 10, $color || startingColor)};
    --custom-secondary-color: ${LCH_to_sRGB_string(
			40,
			80,
			(($color || startingColor) + 180) % 360,
			100,
			true
		)};
    --custom-secondary-highlight-color: ${LCH_to_sRGB_string(
			70,
			100,
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
/>

<!-- --custom-background-color: hsl({$color[0]}, 70%, 95%);  -->
<main style={customStyle}>
	<div class="main-page">
		<Header />
		<Nav --right-transform="{$right - 300}px" />
		<div class="content">
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
		color: var(--custom-text-color);
	}
	.content {
		position: relative;
		padding: min(3vw, 30px);
		transform: translate3d(var(--right-transform), 0, 0);
	}
</style>
