import './Home.css';
import PostsSlider from '../../components/PostsSlider/PostsSlider';

function Home() {
    return (
        <main className="container">
            <h2>Posts</h2>
            <div className='container'>
               <PostsSlider/>
            </div>
        </main>
    );
}

export default Home;