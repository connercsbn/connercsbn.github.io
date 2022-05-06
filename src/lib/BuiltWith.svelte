<script>
	import { onMount } from 'svelte';
</script>

<span><slot /></span>

<style lang="scss">
	span {
		margin: 0.5em 0;
		display: block;
		font-style: italic;
		font-size: 0.75em;
		color: gray;
		color: var(--built-with-color, #9d9d93);
	}
</style>
