<script>
	import { AmbientLight, Pass, Canvas, Group, PerspectiveCamera, PointLight } from 'threlte';
	import { UAParser } from 'ua-parser-js';
	import '../app.scss';
	import '@fontsource/roboto';
	import '@fontsource/ibm-plex-serif';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { open, onMobileDevice } from '$lib/stores';
	import { color, colorMode } from '$lib/stores';
	import { LCH_to_sRGB_string } from '$lib/lch.js';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import { scrollTo } from 'svelte-scrolling';

	const guitarOpacity = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	let startingColor = 206.5;
	let scrollY;
	let chromaSat = 50; // was 70, then 30
	let brightness = 85; // was 95
	let guitarLoaded = false;

	let rotateX, rotateY, rotateZ, positionX, positionY, positionZ;
	const right = tweened(1, {
		duration: 300,
		easing: cubicOut
	});
	let startX, startY, moveX, moveY, clientY, innerWidth, innerHeight;

	let originalPositionX = 4.4;
	let originalPositionY = -1.7;
	let originalPositionZ = 4.7;
	let originalRotateX = 0.2;
	let originalRotateY = 0.3;
	let originalRotateZ = -0.16;
	let originalScale = 0.023;

	const tweenedPositionY = tweened(originalPositionY, {
		duration: 1000,
		easing: cubicOut
	});
	const tweenedRotateY = tweened(originalRotateY, {
		duration: 1000,
		easing: cubicOut
	});

	$: positionX = originalPositionX;
	$: positionY = originalPositionY + scrollY / 20000;
	$: positionZ = originalPositionZ;
	$: rotateMouseOffset = (mouse.x - 0.5 * innerWidth) / 10000;
	$: rotateX = originalRotateX;
	$: rotateY = originalRotateY + scrollY / 50000 + rotateMouseOffset;
	$: rotateZ = originalRotateZ;
	$: scale = originalScale + scrollY / 1000000;
	$: if (guitarLoaded) {
		guitarOpacity.set(guitarLoaded ? 1 : 0);
	}

	let Guitar;
	onMount(async () => {
		$onMobileDevice = new UAParser().getDevice().type == 'mobile';
		if (!$onMobileDevice) {
			Guitar = (await import('../lib/Guitar.svelte')).default;
			setInterval(() => {
				$color = $color + 1;
			}, 400);
		}
	});

	$: $right = $open ? 300 : 0;
	let mouse = { x: undefined, y: undefined };

	function handleMouseMove(e) {
		mouse = { x: e.clientX, y: e.clientY };
	}
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
			true
		)};
    --custom-arrow-color: ${LCH_to_sRGB_string(80, 20, $color || startingColor, 100, true)};
    --custom-text-color: ${LCH_to_sRGB_string(0, 40, $color || startingColor)};
    --custom-background-light: ${LCH_to_sRGB_string(94, 20, $color || startingColor, 100, true)};
    --custom-secondary-color: ${LCH_to_sRGB_string(
			40,
			40,
			(($color || startingColor) + 180) % 360,
			100,
			true
		)};
    --custom-nav-color: ${LCH_to_sRGB_string(
			90,
			20,
			(($color || startingColor) - 100) % 360,
			100,
			true
		)};
    --custom-secondary-highlight-color: ${LCH_to_sRGB_string(
			45,
			35,
			(($color || startingColor) + 180) % 360,
			100,
			true
		)};`
			: ` `);

	let guitar;
</script>

<svelte:head>
	<title>Conner's Portfolio</title>
</svelte:head>
<svelte:window
	on:touchstart={touchStart}
	on:touchmove={touchMove}
	on:touchend={touchEnd}
	on:keydown={handleKeyDown}
	bind:scrollY
	bind:innerWidth
	bind:innerHeight
/>

<main on:mousemove={handleMouseMove} style={customStyle}>
	<div class="main-page">
		<Header />
		<Nav --right-transform="{$right - 300}px" />
		<div class="canvas" style="opacity: {$guitarOpacity};">
			<Canvas>
				<PerspectiveCamera position={{ x: 10, y: 10, z: 10 }} fov={24} lookAt={{ y: 0.5 }} />
				<PointLight shadow position={{ x: 20, y: 0, z: 20 }} intensity={0.7} />
				<AmbientLight shadow position={{ x: 20, y: 0, z: 20 }} intensity={0.8} />
				<Group scale={1}>
					<svelte:component
						this={Guitar}
						{mouse}
						{scrollY}
						{innerWidth}
						{guitar}
						bind:guitarLoaded
					/>
				</Group>
			</Canvas>
		</div>
		<div class="content">
			<slot />
		</div>
	</div>
	<div class="scroll-to-top" use:scrollTo={'home'}>🔝</div>
</main>

<style lang="scss">
	main {
		position: relative;
		padding-top: 67px;
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
		padding: 0 min(3vw, 30px);
		transform: translate3d(var(--right-transform), 0, 0);
	}
	.canvas {
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: 0;
	}
	.scroll-to-top {
		z-index: 10;
		opacity: 0.5;
		font-size: 60px;
		position: relative;
		position: absolute;
		bottom: 10px;
		right: min(3vw, 30px);
		transition: 0.2s all;
		&:hover {
			opacity: 1;
		}
	}
</style>
