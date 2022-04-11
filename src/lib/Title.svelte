<script>
	import { color } from '$lib/stores';
	import { stop_propagation } from 'svelte/internal';
	let width;
	let backgroundColor, fontColor;
	let clientX;
	function updateColor() {
		backgroundColor = (clientX / width) * 360;
		fontColor = (backgroundColor + 0) % 360;
		$color = [backgroundColor, fontColor];
	}
	function handleTouchMove(e) {
		clientX = e.touches[0].clientX;
		updateColor();
	}
	function handleMouseMove(e) {
		clientX = e.clientX;
		console.log(e);
		if (e.buttons) {
			updateColor();
		}
	}
</script>

<svelte:window bind:innerWidth={width} />
<main on:click={updateColor} on:mousemove={handleMouseMove} on:touchmove={handleTouchMove}>
	<div class="title"><a href="/">Conner<br />Luker</a></div>
</main>

<style type="scss">
	main {
		position: relative;
		display: flex;
		background: var(--custom-background-light);
		position: fixed;
		z-index: 1;
		width: 100%;
		height: 67px;
		top: 0;
		box-sizing: border-box;
		border-bottom: 1px solid var(--custom-text-color);
		transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 4px;
			top: 100%;
			left: 0px;
			// background: linear-gradient(
			// 	to right,
			// 	hsl(0, 70%, 95%) 0%,
			// 	hsl(60, 70%, 95%) 16.67%,
			// 	hsl(120, 70%, 95%) 33.33%,
			// 	hsl(180, 70%, 95%) 50%,
			// 	hsl(240, 70%, 95%) 66.67%,
			// 	hsl(320, 70%, 95%) 83.33%,
			// 	hsl(360, 70%, 95%) 100%
			// );
		}
	}
	.title {
		user-select: none;
	}
	.title a {
		text-decoration: none;
		display: inline-block;
		user-select: none;
		position: relative;
		text-align: left;
		color: var(--custom-text-color);
		font-weight: bold;
		z-index: 1;
		margin: 1.3em 30px;
		font-size: 1em;
		font-size: 0.8em;
		/* transition: padding 0.2s;
		transition: font-size 0.2s; */
		transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
	}
</style>
