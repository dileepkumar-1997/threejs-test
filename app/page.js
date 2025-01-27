"use client";

import React, { useState } from "react";
import StoreScene from "../components/StoreScene";
import ProductForm from "../components/ProductForm";
import ShelfForm from "../components/ShelfForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const initialProducts = [
  {
    id: "1",
    name: "Cereal",
    position: [0, 1, 0],
    color: "yellow",
    size: [0.5, 0.8, 0.3],
  },
  {
    id: "2",
    name: "Milk",
    position: [1, 0.5, 0],
    color: "white",
    size: [0.3, 0.6, 0.3],
  },
  {
    id: "3",
    name: "Bread",
    position: [-1, 0.2, 0],
    color: "brown",
    size: [0.6, 0.2, 0.3],
  },
];

const initialShelves = [
  { id: "1", position: [0, 0, 0], size: [4, 0.1, 4] },
  { id: "2", position: [5, 0, 0], size: [4, 0.1, 4] },
];

export default function Home() {
  const [products, setProducts] = useState(initialProducts);
  const [shelves, setShelves] = useState(initialShelves);

  const handleProductUpdate = (newProduct) => {
    setProducts((prevProducts) =>
      prevProducts.some((product) => product.id === newProduct.id)
        ? prevProducts.map((product) =>
            product.id === newProduct.id
              ? { ...product, ...newProduct }
              : product
          )
        : [...prevProducts, newProduct]
    );
  };

  const handleShelfUpdate = (newShelf) => {
    setShelves((prevShelves) =>
      prevShelves.some((shelf) => shelf.id === newShelf.id)
        ? prevShelves.map((shelf) =>
            shelf.id === newShelf.id ? { ...shelf, ...newShelf } : shelf
          )
        : [...prevShelves, newShelf]
    );
  };

  return (
    <div className="flex h-screen">
      <div className="w-3/4">
        <StoreScene products={products} shelves={shelves} />
      </div>
      <div className="w-1/4 p-4 bg-gray-100 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Planogram Editor</h2>
        <Tabs defaultValue="products">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="shelves">Shelves</TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <ProductForm onSubmit={handleProductUpdate} />
          </TabsContent>
          <TabsContent value="shelves">
            <ShelfForm onSubmit={handleShelfUpdate} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
