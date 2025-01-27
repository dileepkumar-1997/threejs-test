import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const Product = ({ id, position, color, name, size, shape = "cylinder" }) => {
  const meshRef = useRef();

  // Rotate animation for the product
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  // Define the geometry based on the shape prop
  const geometry = {
    box: <boxGeometry args={size} />,
    sphere: <sphereGeometry args={[size[0] / 2, 32, 32]} />,
    cylinder: (
      <cylinderGeometry args={[size[0] / 2, size[0] / 2, size[1], 32]} />
    ),
    cone: <coneGeometry args={[size[0] / 2, size[1], 32]} />,
    torus: <torusGeometry args={[size[0] / 2, size[0] / 4, 16, 100]} />,
  };

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        {geometry[shape]}
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[0, size[1] / 2 + 0.1, 0]}
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="bottom"
      >
        {id} {name}
      </Text>
    </group>
  );
};

export default Product;
