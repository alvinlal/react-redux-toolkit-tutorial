import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Cake from './components/cake/Cake';
import IceCream from './components/icecream/Icecream';
import User from './components/user/User';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Cake />
      <IceCream />
      <User />
    </div>
  );
}

export default App;
