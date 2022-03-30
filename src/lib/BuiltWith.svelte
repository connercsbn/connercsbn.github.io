<script>
	import { onMount } from 'svelte';
</script>

<span>Built with <slot /></span>

<style lang="scss">
	span {
		margin: 0.5em 0;
		display: block;
		font-style: italic;
		font-size: 0.72em;
		color: gray;
		color: #9d9d93;
	}
</style>
