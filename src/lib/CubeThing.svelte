<script>
	export let text;
	export let hovering;
	let unrealPass;
	let underlineFilter = text;
	let defaultCameraPosition = new Vector3(5, 1, 1.5);
	let currentCameraPosition = new Vector3(5, 1, 1.5);
	let hoveringCameraPosition = new Vector3(5, 0.0, 0.0);
	let defaultColor = new Vector3(0, 255, 0);
	let currentColor = new Vector3(0, 255, 0);
	let hoveringColor = new Vector3(100, 100, 100);
	let defaultZoom = 100;
	let currentZoom = 100;
	let hoveringZoom = 105;
	let defaultSize = new Vector3(1, 1, 1);
	let currentSize = new Vector3(1, 1, 1);
	let hoveringSize = new Vector3(0.5, 0.5, 0.5);

	$: currentColorRgb = `rgb(${Object.values(currentColor)
		.map((n) => Math.floor(n))
		.join(',')})`;

	$: {
		document.body.style.cursor = hovering ? 'pointer' : 'default';
	}
	import { get } from 'svelte/store';
	import { Vector3, MathUtils, MeshStandardMaterial, LinearFilter, BoxBufferGeometry } from 'three';
	import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
	import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js';
	import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js';
	import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
	import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';

	import {
		DirectionalLight,
		AmbientLight,
		Mesh,
		PerspectiveCamera,
		OrthographicCamera,
		Text,
		useFrame,
		useThrelte,
		useTexture
	} from 'threlte';
	import { onMount } from 'svelte';
	onMount(() => {
		unrealPass = new UnrealBloomPass();
		new UnrealBloomPass();
		unrealPass.threshold = 0;
		unrealPass.strength = 0.5;
		unrealPass.radius = 0;
	});
	$: underlineFilter = hovering
		? text + '\n' + new Array(text.length + 1).fill('_').join('')
		: text;
	const { start, stop, started } = useFrame(
		() => {
			if (hovering) {
				currentCameraPosition = currentCameraPosition.lerp(hoveringCameraPosition, 0.04);
				currentZoom = MathUtils.lerp(currentZoom, hoveringZoom, 0.04);
				currentColor = currentColor.lerp(hoveringColor, 0.04);
				currentSize = currentSize.lerp(hoveringSize, 0.2);
			} else {
				currentCameraPosition = currentCameraPosition.lerp(defaultCameraPosition, 0.04);
				currentZoom = MathUtils.lerp(currentZoom, defaultZoom, 0.04);
				currentColor = currentColor.lerp(defaultColor, 0.4);
				currentSize = currentSize.lerp(defaultSize, 0.2);
			}
		},
		{ autostart: true }
	);
	const { scene, camera } = useThrelte();
	import { Pass } from 'threlte';
	import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
	import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
	import { xlink_attr } from 'svelte/internal';
	const texture = useTexture('hat.png', {
		onError: (error) => {
			console.warn(`An error occured loading the texture: ${error.message}`);
		}
	});
	texture.minFilter = LinearFilter;
</script>

<!-- <DirectionalLight shadow color={'white'} position={{ x: 15, y: 45, z: 20 }} /> -->
<AmbientLight color={'green'} />
<DirectionalLight color={'white'} position={{ x: 100, y: 100, z: 100 }} />
<Text
	text={underlineFilter}
	position={{ x: 0.51 }}
	rotation={{ y: 90 * (Math.PI / 180) }}
	textAlign={'center'}
	anchorX={'center'}
	anchorY={'center'}
	lineHeight={0.1}
	fontSize={0.24}
	color={'white'}
/>

<Mesh
	castShadow
	interactive
	geometry={new BoxBufferGeometry(currentSize.x, currentSize.y, currentSize.z)}
	material={new MeshStandardMaterial({ color: currentColorRgb })}
	rotation={{ y: 0, x: 0, z: 0 }}
/>

<!-- <PerspectiveCamera position={currentCameraPosition} lookAt={{ x: 0, y: 0, z: 0 }} fov={20} /> -->
<OrthographicCamera position={currentCameraPosition} lookAt={{ x: 0, y: 0, z: 0 }} zoom={100} />
<button>hi</button>
