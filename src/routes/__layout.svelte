<script>
	import '@fontsource/noto-sans';
	import '../app.scss';
	import Header from '$lib/Header.svelte';
</script>

<main>
	<Header />
	<div class="content">
		<slot />
	</div>
</main>

<style>
	.content {
		padding: 5.5em 2em;
		background: rgb(48, 47, 47);
		color: rgb(206, 206, 206);
	}
</style>
