<script>
	import Nav from '$lib/Nav.svelte';
	import Title from '$lib/Title.svelte';
	let scrollY;
	let lastScrollY = 100;
	let offset = 0;

	$: percentAwayFromTop = Math.max(
		0,
		Math.min(100 * ((scrollY - offset) / lastScrollY - offset), 100)
	);
</script>

<svelte:window bind:scrollY />
<main>
	<Nav {percentAwayFromTop} />
	<Title {percentAwayFromTop} />
</main>

<style>
	main {
		position: relative;
		z-index: 1;
	}
</style>
