const products = [
  {
    id: 1,
    name: "TV Samsung",
    type: "LED",
    category: "TV",
    price: 2_000_000,
  },
  {
    id: 2,
    name: "TV Sony",
    type: "LED",
    category: "TV",
    price: 2_800_000,
  },
  {
    id: 3,
    name: "Lampu Visikom",
    type: "5 wat",
    category: "Lampu",
    price: 50_000,
  },
];

// GET PRODUCT BY ID
async function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

export { getProductById };
