import React from 'react';
import { Typography, Box } from '@mui/material';

function HeroSection() {
  return (
    <Box className="hero">
      <Box>
        <Typography variant="h2" component="h1">Welcome to Trendysty</Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>Luxury & Trendy Fashion for Every Occasion</Typography>
      </Box>
    </Box>
  );
}

export default HeroSection;