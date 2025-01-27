"use client";

import { useRef } from "react";
import { Html } from "@react-three/drei";

export function ProductMesh({ product }) {
  const meshRef = useRef(null);

  return (
    <group
      position={[product.position.x, product.position.y, product.position.z]}
    >
      <mesh ref={meshRef}>
        <boxGeometry
          args={[
            product.dimensions.width,
            product.dimensions.height,
            product.dimensions.depth,
          ]}
        />
        <meshStandardMaterial color={product.color} />
      </mesh>
      {/* <Html
        position={[0, -0.2, 0.1]}
        center
        className="pointer-events-none"
        style={{
          fontSize: "8px",
          color: "black",
          // backgroundColor: "white",
          padding: "2px 4px",
          borderRadius: "2px",
        }}
      >
        {product.name}
      </Html> */}
    </group>
  );
}
