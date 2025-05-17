const logoPrin = document.querySelector('.logo-prin');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        logoPrin.classList.add('scrolled');
    } else {
        logoPrin.classList.remove('scrolled');
    }
});










/* scroll cambio de color */


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        logoPrin.classList.add('scrolled');
    } else {
        logoPrin.classList.remove('scrolled');
    }

    // Mostrar/ocultar botones al hacer scroll
    if (window.scrollY > 200) {
        botonWhatsApp.style.display = "block"; // Mostrar WhatsApp
        botonSubir.style.display = "block";     // Mostrar Subir
    } else {
        botonWhatsApp.style.display = "none";  // Ocultar WhatsApp
        botonSubir.style.display = "none";     // Ocultar Subir
    }

    // Cambio de color en el header al hacer scroll
    const header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
});

// Función para manejar el scroll suave y animación en los botones
function scrollConAnimacion(boton) {
    boton.classList.add('active'); // Activar la animación de rebote
    
    // Realizar el scroll hacia arriba de forma suave
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Remover la clase de animación después de que haya terminado (0.6s)
    setTimeout(function() {
        boton.classList.remove('active');
    }, 600); // 600ms coincide con la duración de la animación
}

// Evento de clic en el botón de subir
botonSubir.addEventListener('click', function () {
    scrollConAnimacion(botonSubir);
});

// Evento de clic en el botón de WhatsApp
botonWhatsApp.addEventListener('click', function () {
    // Aquí, si quieres un efecto diferente al de "Subir", lo puedes cambiar.
    scrollConAnimacion(botonWhatsApp);
});


//Carrusel comentarios

const track = document.getElementById('carousel-track');

track.addEventListener('mouseenter', () => {
  track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseleave', () => {
  track.style.animationPlayState = 'running';
});



// FUNCIONES CARROUSEL ARREGLOS

     // ===== Carrusel funcional =====

const list = document.querySelector(".carousel .list");
const items = document.querySelectorAll(".carousel .list .item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
const totalItems = items.length;

function showItem(index) {
  items.forEach((item, i) => {
    item.style.display = i === index ? "block" : "none";
  });
}

function showNext() {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

setInterval(showNext, 5000); // cambia automáticamente cada 5 segundos

showItem(currentIndex);




    // Duplicar videos del slider para que se repita el carrusel
    const slider = document.querySelector('.slider-destacados');
    slider.innerHTML += slider.innerHTML;


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
      name: "Heart Red Arreglo",
      price: 60000,
      img: "IMG/diseños florales/1.png"
    },
    {
      id: 2,
      name: "Ferrero Rocher Arreglo",
      price: 70000,
      img: "IMG/diseños florales/2.png"
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
  


  




  

