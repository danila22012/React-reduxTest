import React from 'react';
import Footer from '../static/Footer';
import Header from '../static/Header';
import './style.scss'
import Router from '../Router';


function App() {

console.log('renderapp')
return(   
        <div className="app">
            <Header/>
                <main className="page"> 
                    <Router />
                </main>
            <Footer/>
        </div>
      
  );
}




export default App;
