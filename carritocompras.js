const cart = [];
    const cartBubble = document.getElementById("cartBubble");
    const cartDropdown = document.getElementById("cartDropdown");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartToggle = document.getElementById("cartToggle");

  // Ejemplo de productos (puedes reemplazar con datos reales)
  const exampleProducts = [
    {
      id: 1,
      name: "Infantil Arreglo",
      price: 60000,
      img: "IMG/Niños/1.1.png"
    },
    {
      id: 2,
      name: "Unicorn Arreglo",
      price: 70000,
      img: "IMG/Niños/2.2.png"
    },
    {
        id: 3,
        name: "Mickey Arreglo",
        price: 65000,
        img: "IMG/Niños/3.3.png"
    },
    {
        id: 4,
        name: "Spidy Arreglo",
        price: 70000,
        img: "IMG/Niños/4.4.png"
    },
    {
      id: 5,
      name: "Heart Red Arreglo",
      price: 60000,
      img: "IMG/diseños florales/1.1.png"
    },
    {
      id: 6,
      name: "Ferrero Rocher Arreglo",
      price: 70000,
      img: "IMG/diseños florales/2.2.png"
    },
    {
        id: 7,
        name: "Red Case Arreglo",
        price: 65000,
        img: "IMG/diseños florales/3.3.png"
    },
    {
        id: 8,
        name: "While Case Arreglo",
        price: 70000,
        img: "IMG/diseños florales/4.4.png"
    },
    {
      id: 9,
      name: "Arreglo Sano Boys",
      price: 60000,
      img: "IMG/adultos/1.1.png"
    },
    {
      id: 10,
      name: "Arreglo Baileys",
      price: 70000,
      img: "IMG/adultos/2.2.png"
    },
    {
        id: 11,
        name: "Arreglo Cute",
        price: 65000,
        img: "IMG/adultos/3.3.png"
    },
    {
        id: 12,
        name: "Virgen Dorada Arreglo",
        price: 70000,
        img: "IMG/adultos/4.4.png"
    }
  ];

  function addToCart(productId) {
    const product = exampleProducts.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    updateCart();

  }

  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <p>${item.name}</p>
          <p>$${item.price.toLocaleString()}</p>
        </div>
        <button onclick="removeFromCart(${index})">❌</button>
      `;
      cartItems.appendChild(div);
    });

    cartBubble.innerText = cart.length;
    cartBubble.style.display = cart.length > 0 ? "inline-block" : "none";
    cartTotal.innerText = `Total: $${total.toLocaleString()}`;

    const checkoutButton = document.getElementById("checkoutButton");
    checkoutButton.style.display = cart.length > 0 ? "block" : "none";
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }

  cartToggle.addEventListener("click", function(e) {
    e.preventDefault();
    cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
  });

  // Hacer clic fuera cierra el carrito
  document.addEventListener("click", function(e) {
    if (!document.querySelector(".cart-wrapper").contains(e.target)) {
      cartDropdown.style.display = "none";
    }
  });
  
document.getElementById("checkoutButton").addEventListener("click", function() {
  if (cart.length === 0) return; // No hacer nada si el carrito está vacío
  
  // Mostrar modal
  const modal = document.getElementById("compraExitosaModal");
  modal.style.display = "block";
  
  // Vaciar carrito después de 2 segundos
  setTimeout(() => {
    cart.length = 0;
    updateCart();
    modal.style.display = "none";
  }, 2000);
  
  // Cerrar modal manualmente
  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });
});




  

