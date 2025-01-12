import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" sx={{ marginBottom: '16px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>  E-Commerce App  </Typography>
        <Button color={isActive('/') ? 'secondary' : 'inherit'} component={Link} to="/"  >
          Home  </Button>
        <Button color={isActive('/cart') ? 'secondary' : 'inherit'} component={Link} to="/cart"  >
          Cart  </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
