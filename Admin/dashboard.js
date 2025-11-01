// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const adminNameEl = document.getElementById('admin-name');
    const adminEmailEl = document.getElementById('admin-email');
    const logoutBtn = document.getElementById('logout-btn');

    // 1. Kiểm tra trạng thái đăng nhập
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser || currentUser.email !== 'admin@gmail.com') {
        // Nếu không có thông tin hoặc không phải Admin, chuyển hướng về trang đăng nhập
        alert('Bạn chưa đăng nhập hoặc không có quyền truy cập Admin!');
        window.location.href = 'admin-login.html'; // Tên file đăng nhập của bạn
        return;
    }

    // 2. Hiển thị thông tin đăng nhập của tài khoản quản trị
    adminNameEl.textContent = currentUser.name || 'Admin';
    adminEmailEl.textContent = currentUser.email;

    // 3. Xử lý Đăng xuất
    logoutBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
            localStorage.removeItem('currentUser'); // Xóa thông tin người dùng
            window.location.href = 'admin-login.html'; // Chuyển về trang đăng nhập
        }
    });

    // 4. Logic quản lý và thống kê (Hiện tại chỉ là ví dụ placeholder)

    // Ví dụ: Hiển thị cảnh báo (Yêu cầu: Cảnh báo sản phẩm sắp hết hàng)
    const alertsEl = document.getElementById('alerts');
    const exampleAlert = document.createElement('div');
    exampleAlert.className = 'message msg-danger';
    exampleAlert.innerHTML = '<strong>⚠️ Cảnh báo tồn kho:</strong> Sản phẩm "Áo Thun ABC" sắp hết hàng (chỉ còn 5 sản phẩm)!';
    alertsEl.appendChild(exampleAlert);
});