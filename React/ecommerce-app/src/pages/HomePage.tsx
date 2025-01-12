import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';
import { fetchProducts } from '../api/api';

// Array containing list of products

const HomePage: React.FC = () => {

  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const loadProd = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    loadProd();
  }, [])


  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom> Home Page </Typography>
      <Grid container spacing={2}>
        {
          products.map((product) => (
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
