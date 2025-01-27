import React from "react";

const Shelf = ({ position, size }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#d3fc03" />
    </mesh>
  );
};

export default Shelf;
