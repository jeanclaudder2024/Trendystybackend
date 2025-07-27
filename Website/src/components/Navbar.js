import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src={Logo} alt="Trendysty" style={{ height: 40 }} />
          </Link>
        </Box>
        <Button color="inherit" component={Link} to="/shop">Shop</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}


export default Navbar;