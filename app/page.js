"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { ShelfUnit } from "../components/shelf-unit";
import { GridLabels } from "../components/grid-labels";
import { generateRandomProduct } from "../utils/product-generator";

export default function SupermarketScene() {
  const [shelves, setShelves] = useState([]);
  const shelvesPerRow = 10;
  const numberOfRows = 10;
  const shelfSpacing = 4;
  const rowSpacing = 2.5;
  const productsPerShelfRow = 6;

  // Define shelf heights - products will be placed exactly at these heights
  const shelfHeights = [0.2, 0.6, 1.0, 1.4, 1.8];

  useEffect(() => {
    const generateShelves = () => {
      const newShelves = [];

      for (let row = 0; row < numberOfRows; row++) {
        for (let i = 0; i < shelvesPerRow; i++) {
          const shelfX = (i - shelvesPerRow / 2) * shelfSpacing;
          const shelfZ = row * rowSpacing;
          const products = [];

          // Generate products for each shelf level
          shelfHeights.forEach((shelfHeight) => {
            for (let p = 0; p < productsPerShelfRow; p++) {
              const productX = -1.8 + p * 0.6;
              products.push(
                generateRandomProduct({
                  x: productX,
                  y: shelfHeight, // Place products exactly at shelf height
                  z: 0,
                })
              );
            }
          });

          newShelves.push({
            id: `shelf-${row}-${i}`,
            position: { x: shelfX, y: 0, z: shelfZ },
            products,
          });
        }
      }

      setShelves(newShelves);
    };

    generateShelves();
  }, []);

  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{
          position: [0, 10, 20],
          fov: 50,
        }}
      >
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Environment preset="warehouse" />

        {/* Floor */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>

        {/* Grid Labels */}
        <GridLabels
          rows={numberOfRows}
          columns={shelvesPerRow}
          rowSpacing={rowSpacing}
          columnSpacing={shelfSpacing}
        />

        {/* Shelves */}
        {shelves.map((shelf) => (
          <ShelfUnit key={shelf.id} shelf={shelf} />
        ))}

        <OrbitControls
        // minDistance={5}
        // maxDistance={30}
        // maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
