<script>
	import { open } from '$lib/stores';
	let handleBurgerClick = () => {
		$open = !$open;
	};
	let ariaLabel = 'toggle menu';
</script>

<div
	class="burger"
	class:open={$open}
	on:click={handleBurgerClick}
	role="navigation"
	aria-expanded={$open}
	aria-label={ariaLabel}
>
	<div class="burger-item a" class:open={$open} />
	<div class="burger-item b" class:open={$open} />
	<div class="burger-item c" class:open={$open} />
</div>

<style type="scss">
	.burger {
		position: fixed;
		margin: auto;
		cursor: pointer;
		padding: 18px min(3vw, 30px);
		right: 0;
		top: 0;
		z-index: 1;
		width: 30px;
		height: 30px;
		width: 30px;
	}
	.burger-item {
		height: 2px;
		width: 100%;
		background: var(--custom-secondary-highlight-color, black);
		margin: 20% 0;
	}
	.burger.open {
		transform: translate3d(5px, 3px, 0);
	}
	.open.a {
		transform: translate3d(-5px, 5px, 0) rotate(45deg);
	}
	.open.b {
		display: none;
	}
	.open.c {
		transform: translate3d(-5px, -3px, 0) rotate(-45deg);
	}
</style>
