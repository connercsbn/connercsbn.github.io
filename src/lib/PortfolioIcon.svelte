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
	:root {
		// --hover-color: rgba(0, 0, 0, 1);
		// --hover-color: rgb(28, 28, 28);
	}
	main {
		display: flex;
		position: relative;
		justify-content: space-evenly;
		position: relative;
		margin: 2.5%;
		margin: auto;
		width: 100%;
		height: 200px;
		--hover-color: var(--border-color);
	}
	a {
		position: relative;
		width: 100%;
		border-radius: 0px;
		overflow: hidden;
		background: var(--background);
		background-size: 100%;
		border: 2px solid var(--border-color);
		transition: all 0.2s;
		&:hover {
			border: 2px solid var(--hover-color);
			background-size: 110%;
			span {
				filter: none;
				font-size: 1.1em;
				background: var(--hover-color);
				padding: 1em 0.5em;
			}
		}
	}
	span {
		position: absolute;
		bottom: 10px;
		overflow: hidden;
		background: rgb(89, 89, 89);
		background: #000000de;
		color: white;
		padding: 1em 1em;
		bottom: 0px;
		left: 0px;
		right: 0;
		transition: all 0.2s;
	}
</style>
