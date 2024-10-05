// 简单的过滤功能
const categoryButtons = document.querySelectorAll('.category-btn');
const photoItems = document.querySelectorAll('.photo-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除其他按钮的active类
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        photoItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
