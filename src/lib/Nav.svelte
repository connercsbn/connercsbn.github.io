<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	import { open } from '$lib/stores';
	import Hamburger from '$lib/Hamburger.svelte';
	import { clickOutside } from './clickOutside.js';

	let links = [
		['Contact', '/contact'],
		['Past Work', '/past-work'],
		['About', '/']
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
	<div class="links" class:open={$open} transition:fly={{ x: -250, y: 0, duration: 450 }}>
		{#each links as link}
			<a class="link" href={link[1]} class:active={$page.url.pathname === link[1]}
				><span>{link[0]}</span></a
			>
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
		border-right: 1px solid var(--text-color);
		background: var(--background-color);
		user-select: none;
		flex-shrink: 0;
		transition: 0.4s all;
	}
	.link {
		position: relative;
		text-decoration: none;
		padding: 1em 30px;
		color: var(--text-color);
		text-align: right;
		font-weight: bold;
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
			background: black;
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
		padding: 1em 0;
		position: fixed;
		display: flex;
		align-content: left;
		flex-wrap: wrap;
		flex-direction: column-reverse;
		top: 67px;
		bottom: 0;
		left: 0;
		transform: translate3d(var(--right-transform), 0, 0);
	}
	.link:hover {
		box-sizing: content-box;
		color: var(--text-color);
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
		color: var(--text-color);
		background: transparent;
	}
</style>
