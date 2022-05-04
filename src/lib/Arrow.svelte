<script>
	export let onclick;
	import Fa from 'svelte-fa';
	import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
</script>

<div on:click={onclick}>
	<Fa icon={faCircleChevronDown} />
</div>

<style>
	div {
		position: absolute;
		right: 100px;
		bottom: 100px;
		font-size: 52px;
		color: white;
	}
</style>
