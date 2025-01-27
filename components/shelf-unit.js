"use client";

import { ProductMesh } from "./product-mesh";

export function ShelfUnit({ shelf }) {
  // Define shelf heights to match product placement
  const shelfHeights = [0.2, 0.6, 1.0, 1.4, 1.8];

  return (
    <group position={[shelf.position.x, 0, shelf.position.z]}>
      {/* Base/Footer */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[4, 0.2, 1]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      {/* Vertical supports - full height */}
      <mesh position={[-1.95, 1, 0]}>
        <boxGeometry args={[0.1, 2, 1]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      <mesh position={[1.95, 1, 0]}>
        <boxGeometry args={[0.1, 2, 1]} />
        <meshStandardMaterial color="#666666" />
      </mesh>

      {/* Horizontal shelves - exactly where products will rest */}
      {shelfHeights.map((height, index) => (
        <mesh key={index} position={[0, height, 0]}>
          <boxGeometry args={[4, 0.05, 1]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
      ))}

      {/* Back panel */}
      <mesh position={[0, 1, -0.45]}>
        <boxGeometry args={[4, 2, 0.05]} />
        <meshStandardMaterial color="#888888" />
      </mesh>

      {/* Products */}
      {shelf.products.map((product) => (
        <ProductMesh key={product.id} product={product} />
      ))}
    </group>
  );
}
