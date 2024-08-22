// Bacground.tsx
import { useState, useRef } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { useFrame } from '@react-three/fiber'

export default function Background() {
  return <Stars />
}

function Stars(props) {
  const ref = useRef()
  
  // Aumente o número de pontos e o raio para cobrir mais área
  const [sphere] = useState(() => random.inSphere(new Float32Array(9000), { radius: 100 })) 

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 20
  })

  return (
    <group rotation={[0, 0, 0]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
        scale={[10, 10, 10]}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={2} 
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
