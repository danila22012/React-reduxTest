import React, {useEffect} from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { getPost} from '../../Shared/Handlers/postApiService';

const Post = (props) => {
    
    const {id} = props.match.params
    useEffect(()=>{
       
       
        getPost(id).then(data => {
            
            props.setPost(data);
        });
    }, []); 
    console.log(props.post)
    const {title,
    description,
    data_update,
    likes,
    } = props.post

    const date = new Date(data_update);
    const date_update = date.toLocaleDateString();

    console.log(date_update)
    
    return(
        <div className="posts postPage">
             <h1>{title}:{id}</h1>
             <span>{date_update}</span>

            
                
            

           

        </div>

    )
}

const mapDispatchToProps = dispatch => { 
    return{
         setPost: post => dispatch({type:"SET_POST", post})
    }
}  

const mapStateToProps = state => { 
    return{
        post: state.post.data,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

