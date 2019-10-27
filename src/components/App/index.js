import React from 'react';
import Footer from '../static/Footer';
import Header from '../static/Header';
import './style.scss'
import Home from '../pages/Home'


function App() {

console.log('renderapp')
return(   
        <div className="app">
            <Header/>
                <main className="page"> 
                    <Home />
                </main>
            <Footer/>
        </div>
      
  );
}




export default App;
