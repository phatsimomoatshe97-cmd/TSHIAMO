
let cartCount = 0;
function addToCart() {
  cartCount += 1;
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = cartCount;
  alert('Added to your bag! (Demo only)');
}
function filterProducts(query) {
  const term = query.toLowerCase().trim();
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.display = card.dataset.name.includes(term) ? '' : 'none';
  });
}
function clearFilters() {
  document.querySelectorAll('.filters input').forEach(el => {
    if (el.type === 'range') el.value = el.max;
    else el.value = '';
  });
  document.querySelectorAll('.product-card').forEach(card => card.style.display = '');
}
