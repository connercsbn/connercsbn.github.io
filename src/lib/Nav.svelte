<script>
	import { page } from '$app/stores';
	import Hamburger from '$lib/Hamburger.svelte';
	import { open } from '$lib/stores';
	import { clickOutside } from './clickOutside.js';
	import { slide, fly, crossfade, draw, blur, fade, scale } from 'svelte/transition';
	import { onDestroy, onMount } from 'svelte';
	import { OneMinusDstAlphaFactor, Path } from 'three';

	let links = [
		['Home', '/'],
		['About', '/about'],
		['Contact', '/contact'],
		['Past Work', '/past-work']
	];
	export let percentAwayFromTop;
	let minTop = -0.14;
	let maxTop = 0.9;
	$: currentTop = getCurrentDistance(minTop, maxTop, percentAwayFromTop);

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
	<Hamburger width={45} --transition-duration="200ms" --top="{currentTop}em" />
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
		--selected-border: rgb(15, 48, 25);
		--selected-background: rgb(188, 213, 178);
		--unselected-background: rgb(184, 184, 184);
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
		// border: 2px solid var(--selected-border);
		// padding: calc(0.5em - 2px) calc(1em - 2px);
		border-width: 2px;
		// text-decoration: underline;
		text-underline-offset: 2px;
		border: 2px solid darkgreen;
		padding: calc(0.5em - 2px) calc(1em - 2px);
		color: rgb(0, 44, 0);
		color: darkgreenrgb(0, 46, 0);
	}
	.active {
		color: white;
		background: var(--selected-border);
	}
</style>
