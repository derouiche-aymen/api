import './App.css';
import List from './compenent/List'
import Header from './compenent/Header'
import {useState} from 'react'

function App() {
  const [login,setLogin]=useState(false);
  return (
    <div className="App">
      <Header login={login} setLogin={setLogin}/>
      <List login={login}/>
    </div>
  );
}

export default App;
