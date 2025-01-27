const PRODUCT_TYPES = {
  chips: {
    names: [
      "Classic Chips",
      "Spicy Chips",
      "BBQ Chips",
      "Salt & Vinegar",
      "Cheese Chips",
    ],
    colors: ["#FFD700", "#FF6B6B", "#4CAF50", "#4169E1", "#FFA500"],
    dimensions: { width: 0.3, height: 0.25, depth: 0.15 },
  },
  snacks: {
    names: ["Pretzels", "Popcorn", "Crackers", "Trail Mix", "Nuts"],
    colors: ["#CD853F", "#F4A460", "#D2B48C", "#DEB887", "#8B4513"],
    dimensions: { width: 0.25, height: 0.25, depth: 0.15 },
  },
  chips_premium: {
    names: [
      "Kettle Chips",
      "Organic Chips",
      "Veggie Chips",
      "Tortilla Chips",
      "Rice Crisps",
    ],
    colors: ["#DAA520", "#90EE90", "#20B2AA", "#FFB6C1", "#DDA0DD"],
    dimensions: { width: 0.3, height: 0.25, depth: 0.15 },
  },
};

export function generateRandomProduct(position) {
  const types = Object.keys(PRODUCT_TYPES);
  const type = types[Math.floor(Math.random() * types.length)];
  const productType = PRODUCT_TYPES[type];
  const nameIndex = Math.floor(Math.random() * productType.names.length);

  // Calculate the actual y position to place product ON the shelf
  // Add half the product height to ensure bottom of product touches shelf
  const adjustedY = position.y + productType.dimensions.height / 2;

  return {
    id: Math.random().toString(36).substr(2, 9),
    name: productType.names[nameIndex],
    position: {
      ...position,
      y: adjustedY, // Use adjusted height to place product on shelf
    },
    dimensions: productType.dimensions,
    color: productType.colors[nameIndex],
    type,
  };
}
