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
					class:active={$page.url.pathname === link[1]}>{link[0]}</a
				>
			{/each}
		</div>
	{/if}
</nav>

<style type="scss">
	* {
		font-family: 'Noto Sans';
	}
	:root {
		--red: rgb(170, 48, 48);
		--yellow: rgb(255, 247, 0);
		--dark-yellow: rgb(151, 148, 39);
		--selected-border: rgb(9, 72, 28);
		--selected-background: rgb(8, 58, 23);
		--unselected-background: rgb(155, 155, 155);
	}
	nav {
		position: relative;
		width: 90%;
	}
	.link {
		position: relative;
		display: inline-block;
		text-decoration: none;
		padding: 0.5em 1em;
		margin: 0.2em;
		color: black;
		text-align: center;
		background: var(--yellow);
		background: var(--unselected-background);
		border-radius: 20px;
		white-space: nowrap;
		width: max-content;
	}
	.links {
		margin: 5em 0.3em;
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		z-index: 1000;
	}
	.link:hover {
		// background: var(--selected-background);
		border: 2px solid var(--selected-border);
		// border-width: 2px;
		// text-decoration: underline;
		text-underline-offset: 2px;
		border: 2px solid var(--selected-border);
		// padding: calc(0.5em - 2px) calc(1em - 2px);
		color: var(--selected-border);
		color: darkgreenrgb(0, 46, 0);
		margin: calc(0.2em - 2px) calc(0.2em - 2px);
	}
	.active {
		color: white;
		background: var(--selected-background);
		&:hover {
			color: white;
		}
	}
</style>
