// product-detail.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the product ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("product");
  
    // Product Data (You can expand this with more products)
    const products = {
      shoe1: {
        name: "Air Jordan 1 retro",
        description: "A timeless basketball sneaker line that blends classic MJ-era style with modern streetwear appeal.",
        price: 9895,
        image: "images/i1.webp",
      },
      shoe2: {
        name: "Yeezy Boost 350",
        description: "A sleek, sock-like sneaker known for its Primeknit upper and ultra-comfy Boost cushioning, designed by Kanye West.",
        price: 15000,
        image: "images/i2.jpg",
      },
      shoe3: {
        name: "Nike Dunk Low",
        description: "A low-top staple originally made for basketball, now a streetwear icon with endless colorways.",
        price: 5000,
        image: "images/i3.jpg",
      },
      shoe4: {
        name: "New Balance 550",
        description: "A vintage-inspired silhouette that mixes retro athletic vibes with everyday casual style.",
        price: 6000,
        image: "images/i4.jpg",
      },
      shoe5: {
        name: "Adidas Samba OG",
        description: "A classic indoor soccer shoe turned lifestyle essential, featuring a sleek leather upper and gum sole.",
        price: 6800,
        image: "images/i5.jpg",
      },
      shoe6: {
        name: "Nike Air Max 97",
        description: "A futuristic, wavy-design sneaker with full-length visible Air cushioning for a standout look and feel.",
        price: 8095,
        image: "images/i6.jpg",
      },
      shoe7: {
        name: "Jordan 4 Fire Red ",
        description: " An OG Jordan model featuring bold red accents, mesh side panels, and visible Air for on-court heritage.",
        price: 10195,
        image: "images/i7.webp",
      },
      shoe8: {
        name: "Nike Blazer Mid",
        description: "A throwback basketball shoe with a high-cut profile and vintage Swoosh that’s become a streetwear favorite.",
        price: 6500,
        image: "images/i8.jpg",
      },
      shoe9: {
        name: "Nike Air Force 1 Low",
        description: "A legendary low-top sneaker with crisp white leather and unmatched versatility across generations.",
        price: 8395,
        image: "images/i9.jpg",
      },
      shoe10: {
        name: "Converse Chuck 70",
        description: "An upgraded version of the classic Chuck Taylor, offering premium materials and vintage detailing.",
        price: 4290,
        image: "images/i10.jpg",
      },

    };
  
    // Get the product based on the productId
    const product = products[productId];
  
    // If product exists, populate the page with its data
    if (product) {
      document.getElementById("product-name").textContent = product.name;
      document.getElementById("product-description").textContent = product.description;
      document.getElementById("product-price").textContent = product.price;
      document.getElementById("product-image").src = product.image;
    } else {
      // If product doesn't exist, redirect back to the products page
      window.location.href = "products.html";
    }
  
    // Add to Cart functionality (same as before)
    document.getElementById("add-to-cart").addEventListener("click", function () {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Update cart count in the navbar
      updateCartCount();
  
      alert(product.name + " has been added to your cart!");
    });
  
    // Function to update the cart count in the navbar
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartCount = document.getElementById("cart-count");
      if (cartCount) {
        cartCount.textContent = cart.length;
      }
    }
  
    // Update the cart count on page load
    updateCartCount();
  });
  