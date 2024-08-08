document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.querySelector('.cart-container');
    const subtotalElement = document.getElementById('subtotal');

    const updateSubtotal = () => {
        let subtotal = 0;
        const items = document.querySelectorAll('.cart-item');
        items.forEach(item => {
            const price = parseFloat(item.querySelector('.price-info .price').textContent.replace('₦', '').replace(',', ''));
            const quantity = parseInt(item.querySelector('.quantity').value);
            subtotal += price * quantity;
        });
        subtotalElement.textContent = `₦ ${subtotal.toLocaleString()}`;
        document.querySelector('.checkout-btn').textContent = `CHECKOUT (₦ ${subtotal.toLocaleString()})`;
    };

    itemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('minus-btn')) {
            const quantityInput = event.target.closest('.item-controls').querySelector('.quantity');
            let quantity = parseInt(quantityInput.value);
            if (quantity >= 1) {
                quantity--;
                quantityInput.value = quantity;
                updateSubtotal();
            }
        }

        if (event.target.classList.contains('plus-btn') || event.target.classList.contains('plus-btn1')) {
            const quantityInput = event.target.closest('.item-controls').querySelector('.quantity');
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            updateSubtotal();
        }

        if (event.target.closest('.remove-btn')) {
            const item = event.target.closest('.cart-item');
            item.remove();
            updateSubtotal();
        }
    });

    // Call updateSubtotal once after all event listeners are attached
    updateSubtotal();
});
