import React, { Component } from 'react';
import Post from './post';
import { getPosts } from '../api/api';

export default class PostList extends Component {

    state = {
        posts: null
    }

    componentDidMount() {
        getPosts().then(response => {
            this.setState(
                {
                    posts: response
                }
            );
        });
    }

    render () {
        if (this.state.posts) {
            return this.state.posts.map((post, index) => {
                return <Post key={index} post={post} />;
            });
        }
        
        return 'nothing...';
    }
}