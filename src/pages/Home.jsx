import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Discover Luxury Handbags</h1>
          <p className="hero-subtitle">
            Elegant designs crafted with premium materials for the modern woman
          </p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Our Collection</h2>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

