# Luxury Handbags Shopping Website

A modern, responsive React frontend for a handbags shopping website built with React, React Router, and Vite.

## Features

- 🛍️ Product catalog with beautiful product cards
- 🔍 Product detail pages with color selection and quantity controls
- 🛒 Shopping cart with add, remove, and update quantity functionality
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🎨 Modern UI with gradient designs and smooth animations
- ⚡ Fast and optimized with Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
handbags-shop/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   └── Cart.jsx
│   ├── context/          # React Context
│   │   └── CartContext.jsx
│   ├── data/             # Data files
│   │   └── products.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- React 18
- React Router DOM
- Vite
- CSS3 (with modern features)

## Features in Detail

### Shopping Cart
- Add products to cart
- Update quantities
- Remove items
- View total price
- Persistent cart state (using React Context)

### Product Pages
- Browse all products on the home page
- View detailed product information
- Select colors (if available)
- Adjust quantity before adding to cart

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface

## Customization

You can customize the products by editing `src/data/products.js`. Add your own product images, descriptions, and prices.

## License

This project is open source and available for personal and commercial use.

