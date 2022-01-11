import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/Navbar';



function App() {
  return (
    <div className='App'>
      <HttpsRedirect>
        <NavbarComp/>
      </HttpsRedirect>
    </div>
  );
}



export default App;
