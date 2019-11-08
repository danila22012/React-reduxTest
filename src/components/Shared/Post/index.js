import React from 'react';
import './style.scss';

const Post = props => {

    const {

        title,
        data_update,
        likes,
        description,
    } = props.post;

    console.log(props.post)

    const date = new Date(data_update);
    const dateUpdate = date.toLocaleDateString();

    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{description}</p>
            <i>{dateUpdate}</i>
            <span>likes:{likes}</span>

        </div>
    )
}
export default Post;
