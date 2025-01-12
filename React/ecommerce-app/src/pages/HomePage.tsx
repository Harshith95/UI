import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

// Array containing list of products
const mockProducts: Product[] = [
  { id: 1, name: 'Product 1', price: 10, image: '../assets/laptop.png' },
  { id: 2, name: 'Product 2', price: 20, image: '../assets/smartphone.png' },
  { id: 3, name: 'Product 3', price: 30, image: '../assets/headset.png' },
];

const HomePage: React.FC = () => {
  
  const { addToCart } = useCart();

  return (
    <div>
      <Typography variant="h4" gutterBottom> Home Page </Typography>
      <Grid container spacing={2}>
        {
          mockProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} onAddToCart={addToCart} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

export default HomePage;
