<script>
	import { userSelectedColor, color, colorMode } from '$lib/stores';
	import { GLTF, useThrelte, useTexture, OrthographicCamera } from 'threlte';
	import { LCH_to_sRGB } from './lch';
	const { invalidate } = useThrelte();
	import { Color, MeshToonMaterial, NearestFilter } from 'three';
	export let mygltf;
	export let rotateAmount;
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
		console.log($userSelectedColor);
		guitarScene.traverse((o) => {
			if (o.isMesh) {
				o.material = material;
			}
		});
		invalidate();
	}

	let guitarColorRGB;
	$: if ($color) {
		guitarColorRGB = LCH_to_sRGB([60, 80, ($color + 260) % 360], 100, false).map((x) =>
			Math.max(0, x)
		);
		console.log(guitarColorRGB);
		material.color = new Color().fromArray(guitarColorRGB);
		console.log(material.color);
		invalidate();
	}
</script>

<GLTF
	interactive
	receiveShadow
	bind:gltf={mygltf}
	bind:scene={guitarScene}
	url="/models/guitar.glb"
	position={{ x: 0, y: -1, z: 3 }}
	rotation={rotateAmount}
/>;

<style></style>
