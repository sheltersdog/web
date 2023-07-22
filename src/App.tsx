import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { http } from './api';
import { useEffect } from 'react';
import TopNavigation from './views/app/components/topNavigation';
import Footer from './views/app/components/footer';

function App() {
  const navigate = useNavigate()
  http.setNavigate(navigate)

  useEffect(() => {
    navigate('/volunteers')
  }, [])

  return <>
    <TopNavigation />
    <Outlet />
    <Footer />
  </>
}

export default App;
