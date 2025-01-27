import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProductForm = ({ onSubmit }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [color, setColor] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id,
      name,
      position: [
        Number.parseFloat(x),
        Number.parseFloat(y),
        Number.parseFloat(z),
      ],
      color,
      size: [
        Number.parseFloat(width),
        Number.parseFloat(height),
        Number.parseFloat(depth),
      ],
    });
    setId("");
    setName("");
    setX("");
    setY("");
    setZ("");
    setColor("");
    setWidth("");
    setHeight("");
    setDepth("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="id">Product ID</Label>
        <Input
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex space-x-2">
        <div>
          <Label htmlFor="x">X</Label>
          <Input
            id="x"
            type="number"
            value={x}
            onChange={(e) => setX(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="y">Y</Label>
          <Input
            id="y"
            type="number"
            value={y}
            onChange={(e) => setY(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="z">Z</Label>
          <Input
            id="z"
            type="number"
            value={z}
            onChange={(e) => setZ(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="color">Color</Label>
        <Input
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </div>
      <div className="flex space-x-2">
        <div>
          <Label htmlFor="width">Width</Label>
          <Input
            id="width"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="depth">Depth</Label>
          <Input
            id="depth"
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            required
          />
        </div>
      </div>
      <Button type="submit">Add/Update Product</Button>
    </form>
  );
};

export default ProductForm;
