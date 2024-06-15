"use client";

import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import {
  useProgress,
  Html,
  ScrollControls,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
import {
  Color,
  CubeTexture,
  CubeTextureLoader,
  Euler,
  Fog,
  Group,
  TextureLoader,
  Vector3,
} from "three";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Hero() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="relative h-svh"
      scene={{
        fog: new Fog("#000", 0, 100),

        background: new CubeTextureLoader().load([
          "/assets/3D/scene/skybox/px.jpg",
          "/assets/3D/scene/skybox/nx.jpg",
          "/assets/3D/scene/skybox/py.jpg",
          "/assets/3D/scene/skybox/ny.jpg",
          "/assets/3D/scene/skybox/pz.jpg",
          "/assets/3D/scene/skybox/nz.jpg",
        ]),
        backgroundRotation: new Euler(-1.5, 1, -1.5),
      }}
      camera={{
        position: [0, 0, 0],
        near: 0.1,
        far: 1000,
        fov: 75,
      }}
    >
      <directionalLight intensity={10} color={"orange"} position={[20, 1, 0]} />
      <directionalLight intensity={2} color={"white"} position={[0, 2, 0]} />
      <ambientLight intensity={0.7} />

      <EffectComposer>
        <Bloom luminanceThreshold={2} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.1} />
        <Vignette eskil={false} offset={0.1} darkness={0.85} />
        <DepthOfField focusDistance={0} focalLength={0.2} bokehScale={5} />
      </EffectComposer>

      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/assets/3D/tree_scene.glb");

export function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/assets/3D/tree_scene.glb"
  );
  const { actions, clips } = useAnimations(animations, scene);

  useEffect(() => {
    // @ts-ignore
    actions["Take 001"].play();
  }, []);

  return (
    <>
      <OrbitControls autoRotate={false} />
      <group position={new Vector3(45, -25, 10)} rotation={[-0.2, 0.05, 0]}>
        <primitive object={scene} />
      </group>
    </>
  );
}
