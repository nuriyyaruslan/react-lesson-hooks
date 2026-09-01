import './Posts.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {

    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        //side effect
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response => {
                // console.log('Response Start');
                // console.log(response);
                // console.log('Response End');
                setPosts(response.data);
            }
        ).catch(error => console.log(error));


        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response => setUsers(response.data)
        ).catch(error => console.log(error))
    }, [count])

    console.log(users);

    // console.log(posts);

    return (
        <main className="container">
            <h1>Home {count}</h1>
            <h2>Posts</h2>
            <div className='container'>
                <button type='button' onClick={() => setCount(count+1)}>Count Button {count}</button>
                <div className="posts">
                    {
                        posts.length > 0 ? posts.map((post,index) => (
                            <div className='post-item' key={index}>
                                <strong>{post.id}</strong>
                                <h5>{post.title}</h5>
                                <p>{post.body}</p>
                            </div>
                        )) : <div>Data yoxdur</div>
                    }
                </div>
            </div>
        </main>
    );
}

export default Posts;