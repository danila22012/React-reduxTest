import React, { useEffect } from 'react';
import './style.scss';
import {connect} from 'react-redux';
import { getPosts } from './service'
import Post from '../../Shared/Post'


const Posts = (props) => {  
    
    console.log(props);
    const { posts, setPosts } = props;



    useEffect(() => {

        getPosts()
            .then(data => {
                setPosts(data);
            })
    }, [])
    return (
        <div className="posts">
            <h1>Posts</h1>
            {posts.map ( post => <Post key = {post.id} post = {post}/> )};
        </div>
    )

}

const mapStateToProps = state => {
    
    return {
        posts: state.posts.list,

    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        setPosts: posts => dispatch({type:"SET_POSTS", posts})
        
    }


}



export default connect( mapStateToProps, mapDispatchToProps )(Posts);

