import 'whatwg-fetch';

export function getPosts () {
    return fetch('http://cookfoodeatfood.co.uk/wp-json/wp/v2/posts?')
    .then(function(response) {
        return response.json()
    });
};