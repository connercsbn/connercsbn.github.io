<script>
	import { color } from '$lib/stores';
	let width;
	let backgroundColor, fontColor;
	let clientX;
	function updateColor() {
		backgroundColor = (clientX / width) * 360;
		fontColor = (backgroundColor + 80) % 360;
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
	<div class="title">Conner<br />Luker</div>
</main>

<style type="scss">
	main {
		position: relative;
		display: flex;
		background: var(--background-color);
		position: fixed;
		z-index: 1;
		width: 100%;
		height: 67px;
		top: 0;
		box-sizing: border-box;
		border-bottom: 1px solid var(--text-color);
		transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 4px;
			top: 100%;
			left: 0px;
			background: linear-gradient(
				to right,
				hsl(0, 70%, 90%) 0%,
				hsl(60, 70%, 90%) 16.67%,
				hsl(120, 70%, 90%) 33.33%,
				hsl(180, 70%, 90%) 50%,
				hsl(240, 70%, 90%) 66.67%,
				hsl(320, 70%, 90%) 83.33%,
				hsl(360, 70%, 90%) 100%
			);
		}
	}
	.title {
		position: relative;
		text-align: left;
		color: var(--text-color);
		font-weight: bold;
		z-index: 1;
		padding: 2em 30px;
		padding: 1.3em 30px;
		font-size: 1em;
		font-size: 0.8em;
		/* transition: padding 0.2s;
		transition: font-size 0.2s; */
		transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
	}
</style>
