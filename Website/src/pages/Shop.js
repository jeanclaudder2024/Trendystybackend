import React from 'react';
import { Typography, Box, Grid,  } from '@mui/material';
import ProductCard from '../components/ProductCard';

const products = [
  { title: 'Elegant Gown', image: '/assets/sample1.jpg', price: '199' },
  { title: 'Luxury Hat', image: '/assets/sample2.jpg', price: '89' },
  { title: 'Chic Handbag', image: '/assets/sample3.jpg', price: '149' },
  { title: 'Evening Dress', image: '/assets/sample4.jpg', price: '229' },
];

function Shop() {
  return (
    <Box p={4}>
      <Typography variant="h3" gutterBottom align="center">Shop Our Signature Pieces</Typography>
      <Typography variant="body1" align="center" sx={{ mb: 5 }}>
        Explore high-end fashion handpicked for modern elegance. Each piece is tailored to perfection.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard title={product.title} image={product.image} price={product.price} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Shop;