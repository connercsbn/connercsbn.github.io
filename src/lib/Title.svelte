<script>
	import { color, colorMode } from '$lib/stores';
	import { onMount } from 'svelte';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	let width;
	let backgroundColor, fontColor;
	let clientX;
	let rbL = 90;
	let clicking = false;
	let dragging = false;
	let cursorStyle = 'default';

	function updateColor() {
		backgroundColor = (clientX / width) * 360 || $color;
		fontColor = (backgroundColor + 0) % 360;
		$color = backgroundColor;
	}
	function handleTouchMove(e) {
		clientX = e.touches[0].clientX;
		updateColor();
	}
	function handleMouseMove(e) {
		cursorStyle = clientX - 10 < e.clientX && e.clientX < clientX + 10 ? 'pointer' : 'default';
		if (clicking) {
			dragging = true;
		}
		if (clicking && $colorMode) {
			clientX = e.clientX;
			updateColor();
		}
	}
	function handleMouseUp() {
		clicking = false;
		if (!dragging) {
			$colorMode = !$colorMode;
		}
		dragging = false;
	}
	onMount(() => {
		updateColor();
		clientX = (backgroundColor / 360) * width;
	});
</script>

<svelte:window bind:innerWidth={width} />
<div
	class="title"
	on:mousemove={handleMouseMove}
	on:touchmove={handleTouchMove}
	on:mousedown={() => (clicking = true)}
	on:mouseup={handleMouseUp}
	on:mouseleave={() => (clicking = false)}
	style="--cursorStyle: {cursorStyle}"
>
	<div class="arrow" style="--pixels-over: {clientX || -1000}px">
		{#if $colorMode && backgroundColor}
			{Math.floor(backgroundColor)}&deg;
		{/if}
	</div>
	<div class="title" use:scrollTo={'home'} use:scrollRef={'home'}>
		<a on:click|stopPropagation={() => {}} href="/">CL</a>
	</div>
</div>

<style type="scss">
	.title {
		position: relative;
		display: flex;
		background: var(--custom-background-light, white);
		position: fixed;
		z-index: 1;
		width: 100%;
		height: 67px;
		top: 0;
		box-sizing: border-box;
		border-bottom: 1px solid var(--custom-secondary-color, black);
		transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
		cursor: var(--cursorStyle);
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 3px;
			top: 100%;
			left: 0px;
			// background: linear-gradient(to right, var(--gradient-colors));
		}
	}
	.arrow {
		position: absolute;
		width: 100px;
		height: 100px;
		user-select: none;
		color: var(--custom-text-color);
		color: var(--custom-secondary-highlight-color);
		left: var(--pixels-over);
		transform: translateX(5px);
		font-size: 0.9em;
		display: none;
		&::after {
			content: '';
			width: 2px;
			height: 66px;
			left: -5px;
			position: absolute;
			background: var(--custom-arrow-color);
			display: none;
			// background-image: linear-gradient(
			// 	to left,
			// 	var(--custom-background-light),
			// 	var(--custom-arrow-color),
			// 	var(--custom-background-light)
			// );
		}
	}
	.title {
		user-select: none;
	}
	.title a {
		text-decoration: none;
		display: inline-block;
		display: flex;
		align-self: center;
		user-select: none;
		position: relative;
		text-align: left;
		color: var(--custom-secondary-color);
		font-weight: bold;
		z-index: 1;
		margin: 0.38em 30px;
		margin-left: min(3vw, 30px);
		font-size: 2em;
		/* transition: padding 0.2s;
		transition: font-size 0.2s; */
		transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
	}
</style>
