document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
  
    // Get the cart from localStorage (or use an empty array if no cart exists)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Function to render the cart items and total
    function renderCart() {
      cartContainer.innerHTML = "";
      let total = 0;
  
      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      } else {
        // Loop through cart items and display them
        cart.forEach((item, index) => {
          total += item.price;
  
          // Create the HTML for each item
          const itemEl = document.createElement("div");
          itemEl.classList.add("card", "mb-3", "p-3");
          itemEl.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h5>${item.name}</h5>
                <p class="text-muted">₱${Number(item.price).toFixed(2)}</p>
              </div>
              <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
                Remove
              </button>
            </div>
          `;
          cartContainer.appendChild(itemEl);
        });
      }
  
      // Update the total price in the cart
      totalEl.textContent = total.toFixed(2);
    }
  
    // Function to remove an item from the cart
    window.removeItem = function(index) {
      cart.splice(index, 1); // Remove the item at the given index
      localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart to localStorage
      renderCart(); // Re-render the cart after removing an item
    };
  
    // Initial render of the cart when the page loads
    renderCart();
  });
  
  let checkout= document.getElementById("checkout");

  checkout.addEventListener('click', () => {
    alert("CHECK OUT SUCCESSFUL. THANK YOU FOR ORDERING :)")
  })