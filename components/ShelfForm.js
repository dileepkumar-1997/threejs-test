import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ShelfForm = ({ onSubmit }) => {
  const [id, setId] = useState("");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id,
      position: [
        Number.parseFloat(x),
        Number.parseFloat(y),
        Number.parseFloat(z),
      ],
      size: [
        Number.parseFloat(width),
        Number.parseFloat(height),
        Number.parseFloat(depth),
      ],
    });
    setId("");
    setX("");
    setY("");
    setZ("");
    setWidth("");
    setHeight("");
    setDepth("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="shelfId">Shelf ID</Label>
        <Input
          id="shelfId"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>
      <div className="flex space-x-2">
        <div>
          <Label htmlFor="shelfX">X</Label>
          <Input
            id="shelfX"
            type="number"
            value={x}
            onChange={(e) => setX(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="shelfY">Y</Label>
          <Input
            id="shelfY"
            type="number"
            value={y}
            onChange={(e) => setY(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="shelfZ">Z</Label>
          <Input
            id="shelfZ"
            type="number"
            value={z}
            onChange={(e) => setZ(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex space-x-2">
        <div>
          <Label htmlFor="shelfWidth">Width</Label>
          <Input
            id="shelfWidth"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="shelfHeight">Height</Label>
          <Input
            id="shelfHeight"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="shelfDepth">Depth</Label>
          <Input
            id="shelfDepth"
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            required
          />
        </div>
      </div>
      <Button type="submit">Add/Update Shelf</Button>
    </form>
  );
};

export default ShelfForm;
