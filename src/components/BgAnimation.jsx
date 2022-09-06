import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const Octahedron = (props) => {
	const mesh = useRef();
	const vec = new THREE.Vector3();
	const { camera, mouse } = useThree();
	const [scrolling, setScrolling] = useState(false);

	const scrollHandler = () => {
		setScrolling(true);
		//ff0a0a
		mesh.current.material.color.setHex(0x9f8500);
		setTimeout(() => {
			setScrolling(false);
			mesh.current.material.color.setHex(0xffd60a);
		}, 1000);
	};

	useEffect(() => {
		document.querySelector('.container').addEventListener('scroll', scrollHandler);
	}, []);

	useFrame((state, delta) => {
		camera.position.lerp(vec.set(mouse.x * 2, 0, 0.5), 0.05);
		//let time = clock.getElapsedTime();
		mesh.current.rotation.x += 0.001;
		mesh.current.rotation.y += 0.001;
		mesh.current.rotation.z += 0.001;
		if (scrolling) {
			mesh.current.rotation.x += 0.05;
		}
		// mesh.current.scale.x = time * 3;
		// mesh.current.scale.y = time * 3;
		// mesh.current.scale.z = time * 3;
	});

	return (
		<mesh {...props} ref={mesh}>
			<octahedronGeometry args={[1, 5]} />
			<meshStandardMaterial color={0xffd60a} wireframe />
		</mesh>
	);
};

const BgAnimation = () => {
	return (
		<>
			<Canvas>
				<perspectiveCamera
					fov={45}
					aspect={window.innerWidth / window.innerHeight}
					near={0.1}
					far={1000}
				>
					<hemisphereLight args={[0xffd60a, 0x1b1b1b, 2]} />
					<directionalLight args={[0x1b1b1b, 2]} />
				</perspectiveCamera>
				<Octahedron />
			</Canvas>
		</>
	);
};

export default BgAnimation;
