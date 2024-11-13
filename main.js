document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');

    products.forEach((product) => {
        const addToCartBtn = product.querySelector('.add-to-cart-btn');
        const sizeSelection = product.querySelector('.size-selection');
        const submitBtn = product.querySelector('.submit-btn');
        const closeBtn = product.querySelector('.close-btn');
        const sizes = product.querySelectorAll('.sizes span');
        let selectedSize = null;

        addToCartBtn.addEventListener('click', () => {
            sizeSelection.style.display = 'block';
            addToCartBtn.style.display = 'none';
        });

        closeBtn.addEventListener('click', () => {
            sizeSelection.style.display = 'none';
            addToCartBtn.style.display = 'block';
        });

        sizes.forEach((size) => {
            size.addEventListener('click', () => {
                sizes.forEach((s) => s.classList.remove('selected'));
                size.classList.add('selected');
                selectedSize = size.getAttribute('data-size');
                product.querySelector('p').textContent = `Size: ${selectedSize}`;
            });
        });

        submitBtn.addEventListener('click', () => {
            if (selectedSize) {
                sizeSelection.style.display = 'none';
                addToCartBtn.style.display = 'block';
                addToCartBtn.textContent = 'ADD TO CART';
            } else {
                alert('Please select a size');
            }
        });
    });
});
