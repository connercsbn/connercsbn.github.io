<script>
	import { Pass } from 'threlte';
	import {
		CircleBufferGeometry,
		TorusKnotGeometry,
		MeshStandardMaterial,
		BoxBufferGeometry,
		DoubleSide,
		MeshNormalMaterial,
		OrthographicCamera,
		Plane,
		PlaneGeometry,
		MeshFaceMaterial
	} from 'three';
	import {
		Canvas,
		OrbitControls,
		HemisphereLight,
		Text,
		DirectionalLight,
		Mesh,
		Fog,
		AmbientLight,
		PerspectiveCamera
	} from 'threlte';
</script>

<main>
	<div class="hero main">
		<Canvas>
			<Fog near={10} far={100} color={'#000'} />
			<PerspectiveCamera fov={20} position={{ x: 0, y: 0, z: 4 }}>
				<OrbitControls
					autoRotate
					autoRotateSpeed={0.2}
					enableZoom={false}
					enablePan={false}
					enableRotate={false}
				/>
			</PerspectiveCamera>

			<DirectionalLight color={'white'} position={{ x: -15, y: 45, z: 20 }} />
			<HemisphereLight skyColor={'white'} groundColor={'#ac844c'} intensity={0.4} />

			<Fog near={10} far={1} color={'#000'} />
			<Mesh
				castShadow
				geometry={new TorusKnotGeometry(3, 1, 256, 32)}
				material={new MeshNormalMaterial()}
			/>
			<Fog near={10} far={100} color={'#000'} />
		</Canvas>
	</div>
	<div class="hero text">
		<Canvas>
			<Text
				anchorX={'center'}
				anchorY={'middle'}
				text={'Web developer making beautiful websites'}
				color={'black'}
				fontSize={1}
				textAlign={'center'}
			/>
		</Canvas>
	</div>
</main>

<style>
	main {
		height: 20em;
	}
	html,
	body,
	* {
		padding: 0;
		margin: 0;
	}
	canvas {
	}
	.hero {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 20em;
	}
	.hero.main {
	}
	.hero.text {
	}
</style>
