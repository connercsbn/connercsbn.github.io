<script>
	let unrealPass;
	let hovering = 0;
	import { Pass } from 'threlte';
	import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
	import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
	import CubeThing from '$lib/CubeThing.svelte';
	import { Canvas } from 'threlte';
	import { onMount } from 'svelte';
	onMount(() => {
		unrealPass = new UnrealBloomPass();
		new UnrealBloomPass();
		unrealPass.threshold = 0;
		unrealPass.strength = 0.5;
		unrealPass.radius = 0;
	});
	const handleLeave = () => {
		hovering = 0;
	};
</script>

<main>
	<div
		class="boxThing"
		on:click={() => {
			alert('whatever');
		}}
		on:mouseenter={() => {
			hovering = 1;
		}}
		on:mouseleave={handleLeave}
	>
		<Canvas>
			<!-- <Pass pass={unrealPass} /> -->
			<!-- <Pass pass={new SMAAPass()} /> -->
			<CubeThing text={'About'} hovering={hovering == 1} />
		</Canvas>
	</div>
	<div
		class="boxThing"
		on:mouseleave={handleLeave}
		on:mouseenter={() => {
			hovering = 2;
		}}
	>
		<Canvas>
			<CubeThing text={'Blog'} hovering={hovering == 2} />
		</Canvas>
	</div>
	<div
		class="boxThing"
		on:mouseenter={() => {
			hovering = 3;
		}}
		on:mouseleave={handleLeave}
	>
		<Canvas>
			<CubeThing text={'Contact'} hovering={hovering == 3} />
		</Canvas>
	</div>
</main>

<style>
	main {
		display: flex;
	}
	.boxThing {
		position: relative;
		margin: 0;
		padding: 0;
		display: inline-block;
		top: 0;
		left: 0;
		width: 160px;
		height: 160px;
	}
	*,
	div {
		padding: 0;
		margin: 0;
	}
</style>
