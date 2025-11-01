document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // MÔ PHỎNG LOGIC XỬ LÝ ĐĂNG NHẬP
    if (username === 'admin' && password === '123456') {
        // 1. TẠO BẰNG CHỨNG XÁC THỰC: Lưu cờ hiệu vào LocalStorage
        // Khóa 'isLoggedIn' = 'true'
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('adminUser', username); // Lưu thêm tên người dùng

        errorMessage.style.display = 'none';
        alert('Đăng nhập thành công! Chuyển hướng đến Dashboard...');
        
        // 2. CHUYỂN HƯỚNG
        window.location.href = 'admin-dashboard.html';

    } else {
        // Đăng nhập thất bại
        errorMessage.textContent = 'Tài khoản hoặc mật khẩu không đúng.';
        errorMessage.style.display = 'block';
    }
});

// Thêm chức năng Đăng xuất để xóa bằng chứng
document.getElementById('logoutLink').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('adminUser');
    window.location.href = 'admin-login.html';
});