import { useState } from 'react';
import './App.css';
import Login from './components/login';
import Home from './components/Home';

function App() {
  const [autharized, setAutharized] = useState(false)
  const verifyUserAuth = (isAuth) => {
    setAutharized(isAuth);
  }
  return (
    autharized ?<Home/>:
      <Login userAuthantication={verifyUserAuth} />
  );
}

export default App;
