import { useNavigate } from 'react-router-dom';
import './App.css';
import { http } from './api';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()
  http.setNavigate(navigate)

  useEffect(() => {
    navigate('/volunteers')
   }, [])
  return <></>
}

export default App;
