import React from 'react';

const Home = (props)=>{

    const {title, numberPage} = props;

    return(
        <div className="home">
            <h1>{title}</h1>
            <h2>{numberPage}</h2>
        </div>
    )
}
export default Home;
