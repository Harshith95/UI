import './App.css'
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import { lazy, useState } from 'react';
import NavBar from './components/Nav/NavBar';

// function App() {
//   return (

//   )
// }

const Home = lazy(() => import('./dashboard/pages/Home/Home'));
const About = lazy(() => import('./dashboard/pages/About/About'));
const Users = lazy(() => import('./dashboard/pages/Users/Users'));

const AppContent = (user: any) => {
  console.log(user);
  const location = useLocation();

  return (
    <>
      {
        location.pathname !== '/login' && <NavBar />

      }
      <Container>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={user ? <About /> : < Navigate to="/login" />} />
          <Route path='/users' element={user ? <Users /> : < Navigate to="/login" />} />
        </Routes>
      </Container>
    </>
  );
}

const App = () => {

  const [user, setUser] = useState<string | null>(null);

  return (
    <Router>
      <AppContent user={user}></AppContent>
    </Router>
  )
}

export default App
