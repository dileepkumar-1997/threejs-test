"use client";

import { Text } from "@react-three/drei";

export function GridLabels({ rows, columns, rowSpacing, columnSpacing }) {
  return (
    <group>
      {/* Row labels */}
      {Array.from({ length: rows }).map((_, index) => (
        <Text
          key={`row-${index}`}
          position={[
            (-columns * columnSpacing) / 2 - 1,
            0.1,
            index * rowSpacing,
          ]}
          fontSize={0.5}
          color="black"
          anchorX="right"
          anchorY="middle"
        >
          {String.fromCharCode(65 + index)}
        </Text>
      ))}

      {/* Column labels */}
      {Array.from({ length: columns }).map((_, index) => (
        <Text
          key={`col-${index}`}
          position={[(index - columns / 2 + 0.5) * columnSpacing, 0.1, -1]}
          fontSize={0.5}
          color="black"
          anchorX="center"
          anchorY="top"
        >
          {index + 1}
        </Text>
      ))}
    </group>
  );
}
