<script>
	import { color, colorMode } from '$lib/stores';
	import { GLTF, useThrelte, useTexture, OrthographicCamera } from 'threlte';
	import { LCH_to_sRGB } from './lch';
	const { invalidate } = useThrelte();
	import { Color, MeshToonMaterial, NearestFilter } from 'three';
	export let guitar;
	export let rotateX;
	export let positionX;
	export let scale;
	export let rotateY;
	let guitarScene;

	const gradientTexture = useTexture('/models/threeTone.jpg', {
		onError: (error) => {
			console.warn(`An error occured loading the texture: ${error.message}`);
		}
	});
	gradientTexture.minFilter = NearestFilter;
	gradientTexture.magFilter = NearestFilter;
	const material = new MeshToonMaterial({
		gradientMap: gradientTexture
	});

	$: if (guitarScene) {
		guitarScene.traverse((o) => {
			if (o.isMesh) {
				o.material = material;
			}
		});
	}

	let guitarColorRGB;
	$: {
		if ($color) {
			guitarColorRGB = LCH_to_sRGB([60, 80, ($color + 260) % 360], 100, false).map((x) =>
				Math.max(0, x)
			);
			console.log(guitarColorRGB);
			material.color = $colorMode ? new Color().fromArray(guitarColorRGB) : new Color('white');
			console.log(material.color);
		}
		invalidate();
	}
</script>

<GLTF
	receiveShadow
	bind:gltf={guitar}
	bind:scene={guitarScene}
	url="/models/guitar.glb"
	{scale}
	rotation={{ x: rotateX, y: rotateY, z: 0 }}
	position={{ x: positionX, y: -4, z: 0 }}
	dracoDecoderPath="three/examples/js/libs/draco/"
/>;

<style></style>
