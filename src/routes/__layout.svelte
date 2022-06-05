<script>
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		Group,
		HemisphereLight,
		Mesh,
		OrbitControls,
		PerspectiveCamera,
		GLTF
	} from 'threlte';
	import { DEG2RAD } from 'three/src/math/MathUtils';
	import '../app.scss';
	import '@fontsource/roboto';
	import '@fontsource/ibm-plex-serif';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
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

	const right = tweened(1, {
		duration: 300,
		easing: cubicOut
	});

	$: $right = $open ? 300 : 0;

	let startX, startY, moveX, moveY, clientY;

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
			<Canvas>
				<PerspectiveCamera position={{ x: 10, y: 10, z: 10 }} fov={34}>
					<OrbitControls
						maxPolarAngle={DEG2RAD * 80}
						autoRotate={true}
						enableZoom={false}
						target={{ y: 0.5 }}
					/>
				</PerspectiveCamera>

				<DirectionalLight shadow position={{ x: 3, y: 10, z: 10 }} />
				<DirectionalLight position={{ x: -3, y: 10, z: -10 }} intensity={0.2} />
				<AmbientLight intensity={0.2} />
				<Group scale={0.1}>
					<GLTF
						url="/models/tree.gltf"
						interactive
						on:click={() => {
							console.log('User clicked!');
						}}
					/>;
				</Group>
			</Canvas>
			<div class="orangutan-container">
				<Parallax sections={4} style="overflow: visible;" config={{ damping: 0.8 }}>
					<ParallaxLayer offset={0.05} />
					<ParallaxLayer offset={0.05}>
						<div class="first-orangutan" />
					</ParallaxLayer>
					<ParallaxLayer offset={0.6} rate={-2}>
						<div class="second-orangutan" />
					</ParallaxLayer>
					<ParallaxLayer offset={2}>
						<div class="third-orangutan" />
					</ParallaxLayer>
				</Parallax>
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
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1;
	}
	.first-orangutan,
	.second-orangutan,
	.third-orangutan {
		position: absolute;
		background: #ffab7b;
		background: #ffc450;
		mask-image: url('/orangutan-glasses.svg');
		-webkit-mask-image: url('/orangutan-glasses.svg');
		mask-size: cover;
		-webkit-mask-size: cover;
		width: 600px;
		height: 600px;
		mask-position: center;
		-webkit-mask-position: center;
		display: none;
	}
	.first-orangutan {
		top: 0;
		right: 8%;
		clip-path: circle(243px at 323px 242px);
	}
	.second-orangutan {
		top: 800px;
		top: 0;
		left: 4%;
		clip-path: circle(244px at 315px 244px);
	}
	.third-orangutan {
		top: 3400px;
		top: 0;
		right: 9%;
		clip-path: circle(253px at 320px 252px);
	}
</style>
