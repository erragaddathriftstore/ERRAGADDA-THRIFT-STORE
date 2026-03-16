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


container.innerHTML = `

<div class="product-images">

<img id="main-image" src="${product.images[0]}">

<div class="thumbnail-row">
${product.images.map(img=>`<img src="${img}" onclick="changeImage('${img}')">`).join("")}
</div>

</div>

<div class="product-info">

<h2>${product.name}</h2>

<p>Price: ₹${product.price}</p>

<p>${product.description}</p>

<label>Size:</label>

<select id="size-select">
${product.sizes.map(s=>`<option>${s}</option>`).join("")}
</select>

<br>

<button onclick="orderWhatsApp('${product.name}','${product.id}')">
Order on WhatsApp
</button>

</div>
`;
