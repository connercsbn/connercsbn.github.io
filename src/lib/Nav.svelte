<script>
	import Hamburger from '$lib/Hamburger.svelte';
	import { open } from '$lib/stores';
	import { clickOutside } from './clickOutside.js';
	import { slide, fly, crossfade, draw, blur, fade, scale } from 'svelte/transition';

	let links = [
		['about', '/'],
		['contact', '/'],
		['whatever', '/']
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
		<div class="links" transition:fly={{ duration: 200, y: -100 }}>
			{#each links as link}
				<a class="link" href={link[1]}>{link[0]}</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
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
		border: 1px solid black;
	}
	.links {
		margin: 0.3em;
		position: fixed;
		display: flex;
		width: 40%;
		flex-wrap: wrap;
		/* flex-direction: column; */
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
