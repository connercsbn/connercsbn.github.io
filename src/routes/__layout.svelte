<script>
	import '../app.scss';
	import '@fontsource/roboto';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';
	import { open } from '$lib/stores';
	import { color } from '$lib/stores';
	let scrollY;

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
		// if (startX + 10 < moveX) {
		// 	// swipe right
		// 	if (startY + 20 < moveY || startY - 20 > moveY) {
		// 		// swipe up or down twice as much as right (so not a true swipe right)
		// 	} else {
		// 		$open = true;
		// 	}
		// } else if (startX - 10 > moveX) {
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
</script>

<svelte:window
	on:touchstart={touchStart}
	on:touchmove={touchMove}
	on:touchend={touchEnd}
	on:keydown={handleKeyDown}
	bind:scrollY
/>

<main
	style="--right-transform: {$right}px; --custom-background-color: hsl({$color[0]}, 70%, 95%); --custom-text-color: hsl({$color[1]}, 30%, 40%);--custom-background-light: hsl({$color[0]}, 70%, 99%);"
>
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
		transform: translate3d(var(--right-transform), 0, 0);
	}
</style>
