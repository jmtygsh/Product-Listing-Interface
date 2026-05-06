import './style.css'
import fetchData from './data.js'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <h1>Our Products</h1>
  </header>
  <main id="products-container" class="products-grid">
    <div class="loading">Loading products...</div>
  </main>
`

async function renderProducts() {
  const container = document.querySelector('#products-container')
  try {
    const response = await fetchData()
    const products = response.data.data

    if (!products || products.length === 0) {
      container.innerHTML = '<div class="error">No products found.</div>'
      return
    }

    container.innerHTML = products.map(product => `
      <div class="product-card">
        <div class="product-image-container">
          <img src="${product.thumbnail}" alt="${product.title}" class="product-image" loading="lazy">
          ${product.discountPercentage ? `<span class="discount-badge">-${product.discountPercentage}%</span>` : ''}
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
          <div class="product-meta">
            <span class="product-price">$${product.price}</span>
            <span class="product-rating">★ ${product.rating}</span>
          </div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    `).join('')
  } catch (error) {
    console.error('Error fetching products:', error)
    container.innerHTML = '<div class="error">Failed to load products. Please try again later.</div>'
  }
}

renderProducts()
