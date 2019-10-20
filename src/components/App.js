import React, { useState } from 'react';
// import Footer from './Footer';
// import Header from './Header';
const list = ['vasa','pitya','kolya','alex'];


const timer = new Date()
const render = list.reduce((ak, name, i)=>{

    if(name!=="pitya"){
        ak.push(<p key={i}>{name}</p>)
        return ak;
    }
   return ak;
}, []);


console.log(render)

const result =  new Date() - timer;
console.log(result)

function App() {

    const [res , setRes] = useState('hello');

    

    const show = ()=>{
       setRes(`${res} world`)
    }

  return(   
      <>
        <div id="app">
            <h2 onClick={show}>hello app</h2>
            {res}
        </div>
      </>
  );
}

export default App;
