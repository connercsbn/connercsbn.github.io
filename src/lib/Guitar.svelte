<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut, cubicOut } from 'svelte/easing';
	import { color, colorMode } from '$lib/stores';
	import { GLTF, useFrame, useThrelte, useTexture } from 'threlte';
	import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
	import { LCH_to_sRGB } from './lch';
	const { invalidate, camera, scene, size } = useThrelte();
	import {
		Color,
		Raycaster,
		Vector2,
		MeshToonMaterial,
		NearestFilter,
		RepeatWrapping
	} from 'three';
	import { get } from 'svelte/store';
	export let guitar;
	export let mouse;
	export let innerWidth;
	export let scrollY;

	let originalPositionX = 4.4;
	let originalPositionY = -1.7;
	let originalPositionZ = 4.7;
	let originalRotateX = 0.2;
	let originalRotateY = 0.18;
	let originalRotateZ = -0.16;
	let originalScale = 0.023;
	const tweenedPositionY = tweened(originalPositionY, { duration: 2000, easing: cubicOut });
	const tweenedRotateX = tweened(originalRotateX, { duration: 2000, easing: cubicOut });
	const tweenedRotateY = tweened(originalRotateY, { duration: 2000, easing: cubicOut });
	const tweenedRotateZ = tweened(originalRotateZ, { duration: 2000, easing: cubicOut });
	const tweenedPositionX = tweened(originalPositionX, { duration: 2000, easing: cubicOut });
	const tweenedScale = tweened(scale, { duration: 500, easing: cubicOut });
	$: positionX = originalPositionX - rotateMouseXOffset * 0.5;
	$: positionY = originalPositionY + scrollY / 3000;
	$: positionZ = originalPositionZ;
	$: rotateMouseXOffset = ((mouse.x || innerWidth / 2) - 0.5 * innerWidth) / 10000;
	$: rotateMouseYOffset = ((mouse.y || innerWidth / 2) - 0.5 * innerWidth) / 10000;
	$: rotateX = originalRotateX - rotateMouseXOffset / 15;
	$: rotateY = originalRotateY + scrollY / 50000 + rotateMouseXOffset;
	$: rotateZ = originalRotateZ - rotateMouseXOffset / 15;
	$: scale = originalScale + scrollY / 1000000;
	$: $tweenedRotateX = rotateX;
	$: $tweenedRotateY = rotateY;
	$: $tweenedRotateZ = rotateZ;
	$: $tweenedPositionX = positionX;
	$: $tweenedPositionY = positionY;
	$: $tweenedScale = scale;

	export let guitarLoaded;
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
	material.transparent = true;
	material.opacity = 1;
	material.onBeforeCompile = function (shader) {
		shader.uniforms.time = { value: 0 };
		shader.vertexShader = 'uniform float time;\n' + shader.vertexShader;
		shader.vertexShader = shader.vertexShader.replace(
			'#include <begin_vertex>',
			[
				`float theta = sin( time + position.y ) / 250.0;`,
				'float c = cos( theta );',
				'float s = sin( theta );',
				'mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );',
				'vec3 transformed = vec3( position ) * m;',
				'vNormal = vNormal * m;'
			].join('\n')
		);

		material.userData.shader = shader;
		material.customProgramCacheKey = function () {
			return 2;
		};
	};
	('textures/tri_pattern.jpg');
	$: if (guitarScene) {
		guitarScene.traverse((o) => {
			if (o.isMesh) {
				o.material = material;
			}
		});
	}
	let outlinePass;
	$: if (guitarScene && outlinePass) {
		outlinePass.selectedObjects = [guitarScene];
	}
	let guitarColorRGB;
	$: {
		if ($color) {
			guitarColorRGB = LCH_to_sRGB([100, 92, $color % 360], 100, true).map((x) => Math.max(0, x));
			material.color = $colorMode ? new Color().fromArray(guitarColorRGB) : new Color('white');
		}
		invalidate();
	}
	const { start, stop, started } = useFrame(
		() => {
			console.log('rendering…');
			if (guitarScene) {
				guitarScene.traverse((child) => {
					if (child.isMesh) {
						const shader = child.material.userData.shader;
						if (shader) {
							shader.uniforms.time.value = performance.now() / 1000;
						}
					}
				});
			}
			checkIntersection();
		},
		{ autostart: true }
	);
	const raycaster = new Raycaster();
	function checkIntersection() {
		raycaster.setFromCamera({ x: 500, y: 500 }, get(camera));

		const intersects = raycaster.intersectObject(scene, true);

		if (intersects.length > 0) {
			const selectedObject = intersects[0].object;
			addSelectedObject(selectedObject);
			outlinePass.selectedObjects = selectedObjects;
		}
	}
	outlinePass = new OutlinePass(new Vector2(get(size).width, get(size).height), scene, get(camera));
	outlinePass.edgeThickness = 0.1;
	outlinePass.edgeStrength = 50;
	outlinePass.edgeGlow = 0;
	outlinePass.visibleEdgeColor.set('blue');
	outlinePass.usePatternTexture = false;
	const triPattern = useTexture('/tri_pattern.jpg', {
		onLoad: (texture) => {
			outlinePass.patternTexture = texture;
			texture.wrapS = RepeatWrapping;
			texture.wrapT = RepeatWrapping;
		}
	});
</script>

<GLTF
	receiveShadow
	bind:gltf={guitar}
	bind:scene={guitarScene}
	url="/models/plant_outdoors/scene.gltf"
	scale={$tweenedScale || scale}
	rotation={{
		x: $tweenedRotateX || rotateX,
		y: $tweenedRotateY || rotateY,
		z: $tweenedRotateZ || rotateZ
	}}
	position={{ x: $tweenedPositionX || positionX, y: positionY, z: positionZ }}
	dracoDecoderPath="three/examples/js/libs/draco/"
	on:load={() => {
		guitarLoaded = true;
	}}
/>;

<style></style>
