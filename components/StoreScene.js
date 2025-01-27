import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Product from "./Product";
import Shelf from "./Shelf";

const StoreScene = ({ products, shelves }) => {
  return (
    <Canvas camera={{ position: [0, 5, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <gridHelper args={[20, 20]} />
      {products.map((product) => (
        <Product
          key={product.id}
          position={product.position}
          color={product.color}
          name={product.name}
          size={product.size}
          id={product.id}
        />
      ))}
      {shelves.map((shelf) => (
        <Shelf key={shelf.id} position={shelf.position} size={shelf.size} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default StoreScene;
