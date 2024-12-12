import './App.css'
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import { lazy, useState } from 'react';
import NavBar from './components/Nav/NavBar';
import Login from './dashboard/pages/Login/Login';

const Home = lazy(() => import('./dashboard/pages/Home/Home'));
const About = lazy(() => import('./dashboard/pages/About/About'));
const CreateUser = lazy(() => import('./usermgmt/pages/CreateUser'));
const UserList = lazy(() => import('./usermgmt/pages/UsersList'));
const UserDetails = lazy(() => import('./usermgmt/pages/UserDetails'));

const AppContent = ({ user, handleLogin, handleLogout }: any) => {
  console.log(user);
  const location = useLocation();


  return (
    <>
      {
        location.pathname !== '/login' && <NavBar user={user} onlogout={handleLogout} />
      }
      <Container>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={user ? <About /> : < Navigate to="/login" />} />
          <Route path='/users/create' element={user ? <CreateUser /> : < Navigate to="/login" />} />
          <Route path='/users/list' element={user ? <UserList /> : < Navigate to="/login" />} />
          <Route path='/users/:id' element={user ? <UserDetails /> : < Navigate to="/login" />} />
          <Route path='/login' element={user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
        </Routes>
      </Container>
    </>
  );
}

const App = () => {

  const [user, setUser] = useState<string | null>(null);
  const handleLogin = (email: string) => {
    setUser(email);
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <Router>
      <AppContent user={user} handleLogin={handleLogin} handleLogout={handleLogout}></AppContent>
    </Router>
  )
}

export default App;