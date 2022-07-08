<span><slot /></span>

<style lang="scss">
	span {
		display: block;
		font-style: italic;
		font-size: 0.75em;
		margin-top: 1em;
		color: gray;
		color: var(--built-with-color, #9d9d93);
	}
	@media (max-width: 680px) {
		span {
			margin-bottom: 3em;
		}
	}
</style>
