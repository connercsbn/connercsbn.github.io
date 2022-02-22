<script>
	import Header from '$lib/Header.svelte';
	import { open } from '$lib/stores';
	import Filler from '$lib/Filler.svelte';
</script>

<main>
	<Header />
	<Filler />
</main>

<style>
	* {
		background: rgb(32, 36, 36);
		color: rgb(195, 195, 195);
	}
</style>
