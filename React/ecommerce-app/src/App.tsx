import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;
