import React from 'react';

const Post = (props) => {
    return (
        <article>
            <h3 dangerouslySetInnerHTML={{ __html : props.post.title.rendered }}/>
            <div dangerouslySetInnerHTML={{ __html : props.post.excerpt.rendered }}/>
         </article>
    );
};

export default Post;