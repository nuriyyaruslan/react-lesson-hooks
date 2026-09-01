
//react-bootstrap //mui //ant-design //tailwind // tailwindCss+ant-design //shadcn
import './About.css';
import { AboutData } from '../../data/aboutData';
import PostsSlider from '../../components/PostsSlider/PostsSlider';


function About() {
    return ( 
        <section className="about-section container">
            <img src={AboutData.img} alt="" />
            <h2>{AboutData.title}</h2>
            <div>
                {AboutData.text}
            </div>
            <PostsSlider/>
        </section>
     );
}

export default About;