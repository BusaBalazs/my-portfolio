import { Suspense, useEffect, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

//---------------------------------------------
//---------------------------------------------
const Laptop = () => {
  const laptop = useGLTF("./assets/scene.gltf");
  const testDiv = <div className="hero-div"></div>;
  return (
    <>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
          <primitive object={laptop.scene} scale={3} />
        <group>
         
            <Html   transform>
              <div className="hero-div"></div>
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
        shadows
        camera={{ position: [1, 1, 1], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Laptop />
        <OrbitControls enableZoom={false} enableDamping={true} />
      </Canvas>
    </>
  );
};
//---------------------------------------------
export default LaptopCanvas;
