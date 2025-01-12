import React from 'react';
import { Product } from '../types/product';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  actionLabel?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, actionLabel = 'Add to Cart' }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', '&:hover': { boxShadow: 6, transform: 'scale(1.02)', transition: 'all 0.2s ease-in-out', }, }} >
      <CardMedia component="img" height="140" image={product.image || '/fallback-image.jpg'} alt={product.name || 'Product Image'} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div"> {product.name} </Typography>

        <Typography variant="body2" color="text.secondary"> ${product.price.toFixed(2)} </Typography>

        <Button variant="contained" color={actionLabel === 'Remove' ? 'error' : 'primary'} sx={{ marginTop: 2 }}
          onClick={() => onAddToCart(product)} aria-label={`${actionLabel} ${product.name}`}>
          {actionLabel}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
