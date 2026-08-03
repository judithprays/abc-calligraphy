const productContainer = document.getElementById("products");


products.forEach(product => {

  const emailBody = encodeURIComponent(
    `Hi Tiffy!

${product.orderText}

Thank you!`
  );


  const card = document.createElement("article");

  card.className = "product-card";


  card.innerHTML = `

    <img 
      src="${product.image}" 
      alt="${product.name}"
    >

    <div class="product-info">

      <h3>${product.name}</h3>

      <p>${product.price}</p>

      <a 
        class="order-button"
        href="#order"
      >
        ${
          product.name === "Custom Orders"
            ? "Inquire"
            : "Order"
        }
      </a>

    </div>

  `;


  productContainer.appendChild(card);

});