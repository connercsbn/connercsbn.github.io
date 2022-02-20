<script>
	export let text;
	export let hovering;
	let underlineFilter = text;
	let defaultCameraPosition = new Vector3(5, 1, 1.5);
	let currentCameraPosition = new Vector3(5, 1, 1.5);
	let hoveringCameraPosition = new Vector3(5, -0.1, -0.4);
	$: {
		document.body.style.cursor = hovering ? 'pointer' : 'default';
	}
	import { Vector3, MeshStandardMaterial, BoxBufferGeometry } from 'three';
	import { DirectionalLight, Mesh, PerspectiveCamera, Text, useFrame } from 'threlte';
	import { onMount } from 'svelte';
	$: underlineFilter = hovering
		? text + '\n' + new Array(text.length + 1).fill('_').join('')
		: text;
	const { start, stop, started } = useFrame(
		() => {
			if (hovering) {
				currentCameraPosition = currentCameraPosition.lerp(hoveringCameraPosition, 0.04);
			} else {
				currentCameraPosition = currentCameraPosition.lerp(defaultCameraPosition, 0.04);
			}
		},
		{ autostart: true }
	);
</script>

<!-- <DirectionalLight shadow color={'white'} position={{ x: 15, y: 45, z: 20 }} /> -->
<DirectionalLight shadow color={'white'} position={{ x: 0, y: 0, z: 20 }} />
<Text
	text={underlineFilter}
	position={{ x: 0.51 }}
	rotation={{ y: 90 * (Math.PI / 180) }}
	textAlign={'center'}
	anchorX={'center'}
	anchorY={'center'}
	lineHeight={0.1}
	fontSize={0.24}
	color={'green'}
/>

<Mesh
	castShadow
	interactive
	geometry={new BoxBufferGeometry(1, 1, 1)}
	material={new MeshStandardMaterial({ color: '#154522' })}
	rotation={{ y: 0, x: 0, z: 0 }}
/>
<PerspectiveCamera fov={20} position={currentCameraPosition} lookAt={{ x: 0, y: 0, z: 0 }} />
