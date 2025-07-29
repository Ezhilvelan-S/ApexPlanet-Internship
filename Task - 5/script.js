document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Headphones", image: "assets/images/headphones.jpeg" },
    { name: "Mobiles", image: "assets/images/mobiles.jpg" },
    { name: "Fashion", image: "assets/images/fashion.webp" },
  ];

  const productList = document.querySelector(".product-list");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <h3>${product.name}</h3>
    `;
    productList.appendChild(div);
  });
});
