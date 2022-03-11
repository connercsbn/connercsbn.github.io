<script>
	import '@fontsource/noto-sans';
	import Header from './Header.svelte';
	export let percentAwayFromTop;
	let minPadding = 0.3;
	let maxPadding = 0.4;
	let minFontSize = 1;
	let maxFontSize = 2;
	$: headerPadding = getCurrentDistance(minPadding, maxPadding, percentAwayFromTop);
	$: headerFontSize = getCurrentDistance(minFontSize, maxFontSize, percentAwayFromTop);

	function getCurrentDistance(min, max, percent) {
		return max - percent * 0.01 * (max - min);
	}
</script>

<main>
	<div
		class="title"
		style={`--headerPadding: ${headerPadding}em;--headerFontSize:${headerFontSize}em`}
	>
		Conner Luker
	</div>
</main>

<style>
	main {
		display: flex;
		background: rgb(67, 75, 72);
		position: fixed;
		width: 100%;
		top: 0;
		box-sizing: border-box;
		z-index: 0;
		border-bottom: 2px solid #566660;
	}
	.title {
		font-family: 'Noto Sans';
		text-align: right;
		margin: auto;
		color: white;
		font-weight: bold;
		padding: 0.3em 0;
		font-size: 1em;
		font-size: var(--headerFontSize);
		/* transition: padding 0.2s;
		transition: font-size 0.2s; */
	}
</style>
