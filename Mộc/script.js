const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const accountLink = document.querySelector(".header-actions a:first-child");

// Mở modal đăng nhập khi chưa có tài khoản
accountLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (!localStorage.getItem("loggedInUser")) {
    loginModal.style.display = "block";
  }
});

// Đóng modal
document.querySelectorAll(".close").forEach((btn) => {
  btn.onclick = () => {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  };
});

// Chuyển qua đăng ký
document.getElementById("showRegister").onclick = (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  registerModal.style.display = "block";
};

// Chuyển qua đăng nhập
document.getElementById("showLogin").onclick = (e) => {
  e.preventDefault();
  registerModal.style.display = "none";
  loginModal.style.display = "block";
};

// Đăng ký
document.getElementById("registerForm").onsubmit = (e) => {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  if (username && password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("🌸 Đăng ký thành công! Vui lòng đăng nhập.");
    registerModal.style.display = "none";
    loginModal.style.display = "block";
  }
};

// Đăng nhập
document.getElementById("loginForm").onsubmit = (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (username === savedUser && password === savedPass) {
    localStorage.setItem("loggedInUser", username);
    alert("💐 Đăng nhập thành công!");
    loginModal.style.display = "none";
    updateAccountDisplay();
  } else {
    alert("⚠️ Sai tên đăng nhập hoặc mật khẩu!");
  }
};

// Cập nhật hiển thị tài khoản + đăng xuất
function updateAccountDisplay() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const accountLink = document.querySelector(".header-actions a:first-child");

  if (loggedInUser) {
    accountLink.innerHTML = `
      <i class="fas fa-user"></i> ${loggedInUser}
      <a href="#" class="logout-link" id="logoutLink">Đăng xuất</a>
    `;
    // Gắn sự kiện cho nút đăng xuất
    const logoutBtn = document.getElementById("logoutLink");
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Bạn có chắc muốn đăng xuất không? 🌷")) {
        localStorage.removeItem("loggedInUser");
        alert("🌼 Đã đăng xuất thành công!");
        location.reload();
      }
    });
  } else {
    accountLink.innerHTML = `<i class="fas fa-user"></i> Tài khoản`;
  }
}

// Giữ trạng thái khi tải lại
window.onload = updateAccountDisplay;
function updateAccountDisplay() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const headerActions = document.querySelector(".header-actions");
  const accountLink = headerActions.querySelector("a:first-child");

  if (loggedInUser) {
    accountLink.outerHTML = `
      <div class="account-inline">
        <i class="fas fa-user"></i>
        <span class="username">${loggedInUser}</span>
        <span class="logout-text">Đăng xuất</span>
      </div>
    `;

    const logoutText = document.querySelector(".logout-text");
    logoutText.addEventListener("click", () => {
      if (confirm("Bạn có muốn đăng xuất không?")) {
        localStorage.removeItem("loggedInUser");
        alert("🌷 Đăng xuất thành công!");
        location.reload();
      }
    });
  } else {
    accountLink.innerHTML = `<i class="fas fa-user"></i> Tài khoản`;
  }
}
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
