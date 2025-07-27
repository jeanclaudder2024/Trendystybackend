import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

function ProductCard({ image, title, price }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }} className="card-animate">
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">${price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Buy Now</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;