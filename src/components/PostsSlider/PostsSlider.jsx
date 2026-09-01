import { useEffect, useState } from 'react';
import axios from 'axios';
import SliderImport from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PostsSlider.css';

// Vite 8's dependency optimizer 
const Slider = SliderImport.default ?? SliderImport;


const PostsSlider = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //side effect
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response => {
                setPosts(response.data);
            }
        ).catch(error => console.log(error));
    }, [])


    // console.log(posts);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
       <div className='posts-slider'>
            <Slider {...settings}>
            {
                posts.length > 0 ? posts.map((post, index) => (
                    (
                        ( index < 13 ) ? <div className='post-item' key={index}>
                            <strong>{post.id}</strong>
                            <h5>{post.title}</h5>
                            <p>{post.body}</p>
                        </div> : ''
                    )
                )) : ''
            }
            </Slider>
       </div>
    );
};

export default PostsSlider;