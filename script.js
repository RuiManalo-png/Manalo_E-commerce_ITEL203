document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        // Get the product details
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));
        
        // Get the current cart from localStorage, or initialize it as an empty array
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
        // Add the new item to the cart
        cart.push({ name, price });
  
        // Save the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
  
        // Alert the user (optional)
        alert(`${name} added to cart!`);
        
        // Update cart icon (optional)
        updateCartCount();
      });
    });
  
    // Function to update the cart count in the navbar
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartCount = document.getElementById("cart-count");
      if (cartCount) {
        cartCount.textContent = cart.length;
      }
    }
  
    // Run updateCartCount when any page is loaded
    updateCartCount();
  });
  