document.addEventListener('DOMContentLoaded', function() {
  // Cart functionality
  const quantityBtns = document.querySelectorAll('.quantity-btn');
  const removeBtns = document.querySelectorAll('.remove-btn');
  
  quantityBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const quantityElement = this.parentElement.querySelector('.quantity');
      let quantity = parseInt(quantityElement.textContent);
      
      if (this.textContent === '+' && quantity < 10) {
        quantity++;
      } else if (this.textContent === '-' && quantity > 1) {
        quantity--;
      }
      
      quantityElement.textContent = quantity;
      updateCartTotal();
    });
  });
  
  removeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.cart-item').remove();
      updateCartCount();
      updateCartTotal();
    });
  });
  
  function updateCartTotal() {
    // This would be more complex in a real app
    console.log('Cart total updated');
  }
  
  function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      const count = document.querySelectorAll('.cart-item').length;
      cartCount.textContent = count;
      if (count === 0) {
        cartCount.style.display = 'none';
      } else {
        cartCount.style.display = 'flex';
      }
    }
  }
  
  // Product filter functionality
  const categoryFilter = document.getElementById('category-filter');
  const sortBy = document.getElementById('sort-by');
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', function() {
      console.log('Filter by:', this.value);
      // In a real app, this would filter the products
    });
  }
  
  if (sortBy) {
    sortBy.addEventListener('change', function() {
      console.log('Sort by:', this.value);
      // In a real app, this would sort the products
    });
  }
  
  // Contact form submission
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
  
  // Initialize cart count
  updateCartCount();
});
