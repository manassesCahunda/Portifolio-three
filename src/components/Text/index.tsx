import { OrbitControls, Stats, Text } from "@react-three/drei";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';

interface TextProps {
  text: string;
  colors: string;
}

const Texts: React.FC<TextProps> = ({colors,text, ...props}) => {
  const textRef = useRef<THREE.Mesh>(null);

  return (
    <>
      <pointLight position={[10, 10, 10]} intensity={1} decay={2} distance={15} />
      <Text
        ref={textRef}
        fontSize={2}
        color={colors} 
        anchorX="center"
        anchorY="middle"
        fontWeight={"bold"}
        {...props}
      >
        {text}
      </Text>
    </>
  );
};

export default Texts;
