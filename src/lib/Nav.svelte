<script>
	import Hamburger from '$lib/Hamburger.svelte';
	import { open } from '$lib/stores';
	import { clickOutside } from './clickOutside.js';
	import { slide, fly, crossfade, draw, blur, fade, scale } from 'svelte/transition';

	let links = [
		['home', '/'],
		['about', '/'],
		['contact', '/'],
		['past work', '/']
	];
</script>

<nav
	use:clickOutside
	on:click_outside={() => {
		open.set(false);
	}}
>
	<Hamburger width={45} --transition-duration="200ms" />
	{#if $open}
		<div class="links" transition:fly={{ duration: 200, x: -100 }}>
			{#each links as link}
				<a class="link" href={link[1]}>{link[0]}</a>
			{/each}
		</div>
	{/if}
</nav>

<style type="scss">
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
		background: rgb(220, 213, 21);
		background: white;
		border-radius: 20px;
		box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
		white-space: nowrap;
		width: max-content;
	}
	.links {
		margin: 0.5em 0.3em;
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}
	.link:hover {
		background: yellow;
		border: 2px solid rgb(170, 48, 48);
		border-width: 2px;
		text-decoration: underline;
		text-underline-offset: 2px;
		padding: calc(0.5em - 2px) calc(1em - 2px);
	}
</style>
