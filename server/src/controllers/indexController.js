const links = [
  { href: "/", text: "Home" },
  { href: "products", text: "Products" },
];

const getIndex = (req, res) => {
  res.render("index", { links: links });
};

export { getIndex };
