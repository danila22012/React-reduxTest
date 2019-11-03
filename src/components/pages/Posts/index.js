import React, {useEffect} from 'react';
import './style.scss';
import {getPosts} from './service'

const Posts = (props)=>{

    useEffect(() => {
        getPosts()
    }, [])
    return(
        <div className="Posts">
            <h1>Posts</h1>
       
        </div>
    )
}
export default Posts;
