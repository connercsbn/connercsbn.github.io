<script>
	import { page } from '$app/stores';
	import { open } from '$lib/stores';
	import Hamburger from '$lib/Hamburger.svelte';
	import { clickOutside } from './clickOutside.js';
	import { scrollTo, setGlobalOptions } from 'svelte-scrolling';

	setGlobalOptions({
		offset: -20
	});

	let links = [
		['About', 'about'],
		['Past Work', 'past-work'],
		['Contact', 'contact']
	];
</script>

<nav
	class:open={$open}
	use:clickOutside
	on:click_outside={() => {
		$open = false;
	}}
>
	<Hamburger />
	<div class="links" class:open={$open}>
		{#each links as link}
			<a use:scrollTo={link[1]} class="link" href={'/'}><span>{link[0]}</span></a>
		{/each}
	</div>
</nav>

<style type="scss">
	nav {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: left;
		width: 400px;
		border-right: 1px solid var(--custom-secondary-color);
		background: var(--background-color);
		user-select: none;
		flex-shrink: 0;
		transition: 0.4s all;
		z-index: 1;
	}
	.link {
		position: relative;
		text-decoration: none;
		padding: 1em 30px;
		color: var(--custom-text-color);
		color: black;
		text-align: right;
		font-weight: 800;
		white-space: nowrap;
		width: 230px;
		transition: 0.4s all;
		&::before {
			content: '';
			position: absolute;
			right: 0%;
			bottom: 50%;
			width: 0px;
			height: 1px;
			background: var(--custom-secondary-color, white);
			transition: 0.2s all ease-in;
		}
		&:hover {
			transform: translate3d(-20px, 0, 0);
			transition: 0.2s all ease-in;
			&::before {
				width: 20px;
				transition: 0.2s all ease-in;
			}
		}
	}
	.links {
		border-right: 1px solid var(--custom-secondary-color);
		padding: 1em 0;
		background: var(--custom-secondary-color);
		background: var(--custom-nav-color);
		position: fixed;
		display: flex;
		align-content: left;
		flex-wrap: wrap;
		flex-direction: column;
		top: 67px;
		bottom: 0;
		left: 0;
		transform: translate3d(var(--right-transform), 0, 0);
	}
	.link:hover {
		box-sizing: content-box;
		color: var(--text-color, white);
		color: var(--custom-secondary-color, white);
		font-weight: 900;
		&:after {
			content: '';
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			display: block;
			position: absolute;
		}
	}
	.active {
		color: white;
		background: transparent;
	}
</style>
