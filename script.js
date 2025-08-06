document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll(".product-card");

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    products.forEach((product) => {
      const name = product.querySelector("h3").textContent.toLowerCase();
      product.style.display = name.includes(keyword) ? "block" : "none";
    });
  });
});
