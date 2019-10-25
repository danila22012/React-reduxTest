import React, {useState} from 'react';
import Footer from '../static/Footer';
import Header from '../static/Header';

import Home from '../pages/Home'



function App() {

const[value, setValue] = useState('');

const changeInput = (event) =>{
    
    setValue(event.target.value);
}
return(   
        <div id="app">
            <Header/>
                <main>
                    <input onChange={changeInput}/>
                    <Home 

                        title={value} 
                        numberPage="5"
                    />
                    <p>{value}</p>
                </main>
            <Footer/>
        </div>
      
  );
}





export default App;
