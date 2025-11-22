import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <p>Product not found</p>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedColor && product.colors.length > 0) {
      alert('Please select a color')
      return
    }
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    alert('Added to cart!')
  }

  return (
    <div className="product-detail">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">{product.description}</p>

            {product.colors && product.colors.length > 0 && (
              <div className="color-selector">
                <h3>Select Color:</h3>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-option ${
                        selectedColor === color ? 'selected' : ''
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <button
              className="add-to-cart-button"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

