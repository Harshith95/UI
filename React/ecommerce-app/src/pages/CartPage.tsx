import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cart Page
      </Typography>
      {
        cart.length === 0 ? (
          <Typography variant="body1" align="center" color="text.secondary">
            Your cart is empty.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {
              cart.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <ProductCard product={product} onAddToCart={() => removeFromCart(product.id)} actionLabel="Remove" />
                </Grid>
              ))
            }
          </Grid>
        )
      }
    </div>
  );
};

export default CartPage;
