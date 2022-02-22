<script>
	import Hamburger from '$lib/Hamburger.svelte';
	import { open } from '$lib/stores';
	let links = [
		['about', '/'],
		['contact', '/'],
		['whatever', '/']
	];
	import { clickOutside } from './clickOutside.js';
	function handleClickOutside(event) {
		open.set(false);
	}
</script>

<nav use:clickOutside on:click_outside={handleClickOutside}>
	<Hamburger width={45} />
	<div class="links" class:open={$open}>
		{#each links as link}
			<a class="link" href={link[1]}>{link[0]}</a>
		{/each}
	</div>
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
		/* background-color: rgb(136, 212, 136); */
		/* color: rgb(136, 212, 136); */
		color: white;
	}
	.links {
		display: none;
		margin: 0 0;
		width: 100%;
		position: fixed;
		background: rgb(22, 22, 22);
	}
	.links.open {
		display: block;
	}
	.link:hover {
		/* background-color: rgb(50, 124, 50);
		color: white;
		background-color: rgb(136, 212, 136); */
		background-color: rgba(0, 100, 0, 0.2);
	}
</style>
