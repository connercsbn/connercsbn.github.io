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

<div on:click={onclick} style={`--arrow-color: ${arrowColor};transform: rotate(${$turn}deg);`}>
	<Fa icon={faCircleChevronDown} />
</div>

<style lang="scss">
	div {
		position: absolute;
		right: 100px;
		bottom: 100px;
		font-size: 52px;
		fill: white;
		color: var(--arrow-color);
		&:hover {
			color: white;
		}
	}
</style>
