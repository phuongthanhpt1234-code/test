document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các nút "Thêm vào giỏ hàng"
  const addToCartButtons = document.querySelectorAll(".btn-primary");
  const cartCount = document.querySelector(".cart-count");

  // Nếu có các nút thì thêm sự kiện click
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Lấy số lượng hiện tại trong giỏ
      let count = parseInt(cartCount.textContent);
      cartCount.textContent = count + 1; // Tăng 1 sản phẩm

      // Hiệu ứng đổi chữ trong nút
      const originalText = button.textContent;
      button.textContent = "Đã thêm!";
      button.style.backgroundColor = "#4CAF50"; // đổi màu để dễ thấy
      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = ""; // trả lại màu cũ
      }, 1000);
    });
  });

  // Form đăng ký bản tin
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== "") {
        alert("Cảm ơn bạn đã đăng ký nhận bản tin!");
        emailInput.value = "";
      } else {
        alert("Vui lòng nhập địa chỉ email hợp lệ!");
      }
    });
  }
});
