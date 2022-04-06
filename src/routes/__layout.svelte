<script>
	import '../app.scss';
	import '@fontsource/roboto';
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
		padding-top: 4.5em;
		background: rgb(48, 47, 47);
		color: rgb(206, 206, 206);
	}
</style>
