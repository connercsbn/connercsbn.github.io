<script>
	import { onMount } from 'svelte';

	export let name;
	export let href;
	export let icon;
	export let bgcolors = undefined;
	export let xoffset = 0;
	export let yoffset = 0;
	export let extrastuff = '';

	$: baseBackgroundStyle =
		`--background: url(${icon}) ${xoffset}px ${yoffset}px no-repeat` +
		(bgcolors ? `, linear-gradient(${bgcolors[0]}, ${bgcolors[1]});` : ';');
</script>

<main style={baseBackgroundStyle + `--border-color: ${bgcolors[0]}`}>
	<a {href} style={extrastuff}>
		<span>{name}</span>
	</a>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: space-between;
		width: min-content;
		position: relative;
		margin: 1em;
	}
	a {
		position: relative;
		height: 240px;
		width: 240px;
		border-radius: 20px;
		overflow: hidden;
		max-width: 230px;
		background: var(--background);
		background-size: 100%;
		border: 2px solid var(--border-color);
		&:hover {
			border: 2px solid rgb(136, 136, 136);
			span {
				background: rgb(136, 136, 136);
			}
		}
	}
	span {
		position: absolute;
		bottom: 10px;
		overflow: hidden;
		background: rgb(89, 89, 89);
		color: white;
		padding: 1em 1em;
		bottom: 0px;
		left: 0px;
		right: 0;
	}
</style>
