import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
 
  function showAlert(message,type)
  {
    setalert(
      {
        msg:message,
        type:type
      }
    )
  }

  setTimeout(() => {
    setalert(null);
  }, 5000);

  

  const toggleMode = () => {
    switch (Mode) {
      case 'light':
        setMode('dark');
        document.body.style.backgroundColor='#063970'
        showAlert(" Dark mode enabled","success")
        break;
      case 'dark':
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert(" Dark mode disabled","success")
        break;
      default:
        break;
    }
  };

  return (
    <>
    <BrowserRouter>
    <Navbar  title="Textify" mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
         
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Try Textify | Word counter | Characters counter | Remove extra spaces" mode={Mode}/>
          </Route>
    </Switch>
    </div>
    </BrowserRouter>

    </>
    
  );
}

export default App;
