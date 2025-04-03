import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

//---------------------------------------------
//---------------------------------------------
const Laptop = () => {
  const ref = useRef();

  const laptop = useGLTF("./assets/scene.gltf");

  return (
    <>
      <mesh ref={ref} >
        <hemisphereLight intensity={2} groundColor="black" />
        <group rotation={[0, -4.71, .3]}>
          <primitive object={laptop.scene} scale={12} />
        </group>

        <group position={[0, 1.5, -0.5]}>
          <Html transform >
            <div className="hero-div">
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
            </div>
          </Html>
        </group>
      </mesh>
    </>
  );
};

const LaptopCanvas = () => {
  return (
    <>
      <Canvas
        style={{ height: "800px" }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 5] }}
      >
        <Laptop />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
};
//---------------------------------------------
export default LaptopCanvas;
