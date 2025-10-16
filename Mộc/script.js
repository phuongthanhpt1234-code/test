<script>
      // Simple JavaScript for interactive elements
      document.addEventListener("DOMContentLoaded", function () {
        // Add to cart functionality
        const addToCartButtons = document.querySelectorAll(".btn-primary");
        const cartCount = document.querySelector(".cart-count");

        addToCartButtons.forEach((button) => {
          button.addEventListener("click", function (e) {
            e.preventDefault();
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;

            // Simple animation
            this.textContent = "Added!";
            setTimeout(() => {
              this.textContent = "Add to Cart";
            }, 1000);
          });
        });

        // Newsletter form submission
        const newsletterForm = document.querySelector(".newsletter-form");
        newsletterForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const emailInput = this.querySelector('input[type="email"]');
          if (emailInput.value) {
            alert("Thank you for subscribing to our newsletter!");
            emailInput.value = "";
          }
        });
      });
    </script>