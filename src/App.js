import styled from 'styled-components';
import './App.css';
import RegistrationToTrello from './components/RegistrationToTrello';
import YourProfile from './components/YourProfile';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact>
          <RegistrationToTrello />
        </Route>
        <Route path='/reg' exact>
          <YourProfile />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
