<script>
	import { page } from '$app/stores';
	import Hamburger from '$lib/Hamburger.svelte';
	import { open } from '$lib/stores';
	import { clickOutside } from './clickOutside.js';
	import { slide, fly, crossfade, draw, blur, fade, scale } from 'svelte/transition';

	let links = [
		['Home', '/'],
		['About', '/about'],
		['Contact', '/contact'],
		['Past Work', '/past-work']
	];
	export let percentAwayFromTop;
	let minTop = 0.3;
	let maxTop = 0.8;
	let minBarHeight = 10;
	let maxBarHeight = 12;
	$: currentTop = getCurrentDistance(minTop, maxTop, percentAwayFromTop);
	$: currentBarHeight = getCurrentDistance(minBarHeight, maxBarHeight, percentAwayFromTop);

	function getCurrentDistance(min, max, percent) {
		return max - percent * 0.01 * (max - min);
	}
</script>

<nav
	use:clickOutside
	on:click_outside={() => {
		$open = false;
	}}
>
	<Hamburger
		--barHeight="{currentBarHeight}px"
		--transition-duration="200ms"
		--top="{currentTop}em"
	/>
	{#if $open}
		<div class="links" transition:fly={{ duration: 200, x: -100 }}>
			{#each links as link}
				<a
					on:click={() => {
						$open = false;
					}}
					class="link"
					href={link[1]}
					class:active={$page.url.pathname === link[1]}><span>{link[0]}</span></a
				>
			{/each}
		</div>
	{/if}
</nav>

<style type="scss">
	:root {
		--red: rgb(170, 48, 48);
		--yellow: rgb(255, 247, 0);
		--dark-yellow: rgb(151, 148, 39);
		--faded-yellow: #fcf599a9;
		--dark-faded-yellow: #403e2eed;
		--light-faded-yellow: #e1daa7;
		// --light-faded-yellow: white;
		--selected-background: rgb(8, 58, 23);
		--unselected-background: rgb(155, 155, 155);
	}
	nav {
		position: relative;
		width: 90%;
		user-select: none;
	}
	.link {
		position: relative;
		display: inline-block;
		text-decoration: none;
		padding: 0.5em 1em;
		margin: 0.1em;
		color: var(--faded-yellow);
		text-align: center;
		font-weight: bold;
		background: var(--yellow);
		background: var(--unselected-background);
		background: #4e4e3a;
		background: var(--dark-faded-yellow);
		white-space: nowrap;
		width: max-content;
		border: 2px solid white;
		border: 2px solid var(--faded-yellow);
	}
	.links {
		margin: 4.4em 0.3em;
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		z-index: 1000;
	}
	.link:hover {
		box-sizing: content-box;
		border: 2px solid var(--light-faded-yellow);
		color: var(--light-faded-yellow);
		&:after {
			content: '';
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: rgba(225, 150, 52, 0.44);
			display: block;
			position: absolute;
			z-index: 10000;
		}
	}
	.active {
		color: white;
		background: var(--selected-background);
		background: rgba(100, 200, 100, 0.2);
		background: rgba(67, 121, 67, 0.8);
		&:hover {
			color: white;
		}
	}
</style>
