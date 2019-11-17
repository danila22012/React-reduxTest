import React, {useEffect} from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Post from '../../Shared/Post'
import { getlastPosts } from '../../Shared/Handlers/postApiService';

const Home = (props)=>{
    

    useEffect(()=>{
        getlastPosts(3).then(data => {
            console.log(data)
            props.setLastPosts(data);
        })
    }, [])

    return(
        <div className="posts">
            <h1>Last Posts</h1>
            {props.lastPosts.map( post => <Post key = {post.id} post = {post}/> )}
        </div>
    )
}

const mapDispatchToProps = dispatch => { 
    return{
         setLastPosts: posts => dispatch({type:"SET_LAST_POST", posts})
    }
}
const mapStateToProps = state => { 
    return{
        lastPosts: state.home.lastPosts
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Home);

