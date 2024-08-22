import React, { useRef , useState} from 'react';
import { Canvas, useFrame  , useThree} from '@react-three/fiber'
import { useGLTF , MeshReflectorMaterial } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { easing } from 'maath'
import { MeshStandardMaterial  } from 'three'
import { Instances, Computers } from '@/components/Computer/index'
import Texts from '@/components/Text'
import { Color } from 'three';
const mouse = '/mouse.glb';
import { useNavigate } from 'react-router-dom';


function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
}

function Mouse(props) {
  const navigate = useNavigate();
  const { scene } = useGLTF(mouse);
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  const handleClick = () => {
    navigate('/about');
  };

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  if (!scene) {
    console.error('Failed to load GLTF model.');
    return null;
  }

  return (
    <>
      <primitive
        object={scene}
        ref={ref}
        {...props}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      <Texts
        text="Clica⬇️aqui"
        colors={hovered ? 'hotpink' : 'white'} 
        scale={0.04}
        position={[0, 0.4, 2]}
        rotation={[0, 0, 0]}
      />
    </>
  );
}


export default function App() {
  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 60, near: 1, far: 20 }} eventSource={document.getElementById('root')} eventPrefix="client">
       <color attach="background" args={['black']} />
       <hemisphereLight intensity={0.10} groundColor="black" />
       <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
       <group position={[-0, -1, 0]}>
        <Instances>
          <Computers scale={0.5} />
        </Instances>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={180}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>
        <Mouse scale={0.1} position={[0, 0, 2]} rotation={[0,0, 0]} />
        <Texts text='Cahunda' colors='white' scale={0.1} position={[-1.2, 1, 0]}  rotation={[0,1.2, 0]} />
        <Texts text='Manassés'  colors='white' scale={0.1} position={[-1.2, 1.2, 0]} rotation={[0,1.2, 0]} />
        <Texts text='Full stack' colors='white' scale={0.1} position={[1, 1.4, -1]} rotation={[0,-1, 0]} />
        <Texts text='Developer'  colors='white' scale={0.1} position={[1, 1.2, -1]} rotation={[0,-1, 0]} />
        <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
      </group>
      <CameraRig />
    </Canvas>
  )
}


        
        /*<Texts text='node.js' colors='green' scale={0.1} position={[-1.8, 4, -4]} rotation={[0,0, 0]} />
        <Texts text='next.js' colors='skyblue' scale={0.1} position={[-1.6, 4.2, -4]} rotation={[0,0, 0]} />
        <Texts text='vue.js' colors='#1FDB7B' scale={0.1} position={[-1, 4, -4]} rotation={[0,0, 0]} />
        <Texts text='react.js' colors='#4A6ED9' scale={0.1} position={[-1.6, 3.8, -4]} rotation={[0,0, 0]} />
        <Texts text='tailwindcss' colors='#8D4AD9' scale={0.1} position={[0.2, 3.8, -4]} rotation={[0,0, 0]} />
        <Texts text='angular.js' colors='red' scale={0.1} position={[0.01, 4, -4]} rotation={[0,0, 0]} />
        <Texts text='react-native' colors='#5F4AD9' scale={0.1} position={[-1, 4.4, -4]} rotation={[0,0, 0]} />
        <Texts text='electron' colors='#25BBDB' scale={0.1} position={[0, 4.2, -4]} rotation={[0,0, 0]} />
        */