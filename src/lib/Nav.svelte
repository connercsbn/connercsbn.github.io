<script>
	import Hamburger from '$lib/Hamburger.svelte';
	import { open } from '$lib/stores';
	import { clickOutside } from './clickOutside.js';
	import { slide } from 'svelte/transition';

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
		<div class="links" transition:slide={{ duration: 200 }}>
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
		display: block;
		padding: 1em 1em;
		margin: 0;
		color: white;
	}
	.links {
		margin: 0 0;
		width: 100%;
		position: fixed;
		background: rgb(22, 22, 22);
	}
	.link:hover {
		background-color: rgba(0, 100, 0, 0.2);
	}
</style>
