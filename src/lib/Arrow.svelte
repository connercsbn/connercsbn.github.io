<script>
	export let showLinks;
	export let onclick;
	import Fa from 'svelte-fa';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons/faCircleChevronDown';
	const turn = tweened(0, {
		duration: 300,
		easing: cubicOut
	});
	export let arrowColor;
	$: if (showLinks) {
		turn.set(180);
	} else {
		turn.set(0);
	}
</script>

<div on:click={onclick} style={`--arrow-color: ${arrowColor}`}>
	<Fa icon={faCircleChevronDown} rotate={$turn} scale={1} />
</div>

<style lang="scss">
	div {
		position: absolute;
		right: 0.4em;
		bottom: 0em;
		font-size: 40px;
		color: var(--custom-background-color, gray);
		stroke: var(--custom-text-color);
		stroke-width: 10px;
		// color: var(--arrow-color);
		&:hover {
			color: var(--custom-background-light, rgb(165, 165, 165));
		}
	}
	@media (max-width: 500px) {
	}
</style>
