"use client";

import React, { useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
  BrightnessContrast,
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
import Loading from "@/app/loading";
import { useResolutionStore } from "@/store/resolution";
import Lottie from "lottie-react";
import scroll from "@/../public/static/animations/scroll.json";
import { useMouse } from "@uidotdev/usehooks";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Hero() {
  const [mouse] = useMouse();
  const group = useRef<Group>(null);

  const [loading, setLoading] = useState(true);
  const ref = useRef<any>(null);
  const resolution = useResolutionStore((state) => state.resolution);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, [resolution]);

  if (typeof document === "undefined" || loading) {
    return null;
  }

  // useFrame((_, delta) => {
  //   if (!group.current) return;

  //   const speed = 0.00005;

  //   const x = (mouse.x / 2) * speed;
  //   const y = (mouse.y / 2) * speed;

  //   group.current.rotation.y = x;
  //   group.current.rotation.x = y;
  // });

  return (
    <Suspense fallback={<Loading />}>
      <div className="absolute bg-slate-500 h-[100vh] w-full top-0 -z-1">
        <Canvas
          ref={ref}
          gl={{
            antialias: true,
          }}
          dpr={resolution === "min" ? 0.35 : [1, 1.5]}
          className="relative h-svh"
          scene={{
            fog: new Fog("#1a1000", 0, 100),

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
            ref: ref,
            position: [0, 0, 0],
            near: 0.1,
            far: 1000,
            fov: 75,
          }}
        >
          <directionalLight
            intensity={10}
            color={"orange"}
            position={[20, 1, 0]}
          />
          <directionalLight
            intensity={2}
            color={"white"}
            position={[0, 2, 0]}
          />
          <ambientLight intensity={0.7} />

          <EffectComposer>
            <Bloom
              luminanceThreshold={2}
              luminanceSmoothing={0.9}
              height={300}
            />
            <Noise opacity={0.03} />
            <Vignette eskil={false} offset={0.1} darkness={0.85} />
            <DepthOfField focusDistance={0} focalLength={0.8} bokehScale={5} />
            <BrightnessContrast brightness={0.05} contrast={0.15} />
          </EffectComposer>

          <Model />
        </Canvas>
        <div className="absolute bottom-5 transform -translate-x-1/2 left-1/2">
          <Lottie
            animationData={scroll}
            loop
            autoplay
            style={{ width: 100, height: 100 }}
          />
        </div>
      </div>
    </Suspense>
  );
}

useGLTF.preload("/assets/3D/tree_scene.glb");

export function Model() {
  const { animations, scene } = useGLTF("/assets/3D/tree_scene.glb");
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
