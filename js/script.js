fetch("data/products.json")
.then(response => response.json())
.then(data => {

  const container = document.getElementById("product-list");

  data.products.forEach(product => {

    const card = document.createElement("div");

    card.innerHTML = `
      <img src="${product.images[0]}" width="200">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <a href="product.html?id=${product.id}">View Product</a>
    `;

    container.appendChild(card);

  });

});
