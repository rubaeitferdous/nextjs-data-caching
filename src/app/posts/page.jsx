import React from 'react';



/* 
get
post
update: put patch
delete

*/

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
    return res.json();
}

// if(!res.ok) {
//     throw new Error('Failed to fetch data');
// }



const Post = async () => {

    const postsPromise = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
        return res.json();
    
    }

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
    // const posts = await res.json();
    // console.log(posts);

// const posts = await postsPromise();
const posts = await getPosts();

    return (
        <div>
            <h2>Posts: {posts.length}</h2>
        </div>
    );
};

export default Post;