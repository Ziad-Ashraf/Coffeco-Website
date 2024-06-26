import './styles/About.scss'
import AboutUs from '../images/about.jpg'

const About = () => {
    return (
        <div className='aboutus'>
            <div className="aboutimage">
                <img src={AboutUs} alt="About Us Image" className='about-img'/>
            </div>
            <div className="aboutustxt">
                <h3 className='header'>OUR HISTORY</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, commodi. Consequuntur iusto aliquam pariatur quo facere sed dolor ad assumenda.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, commodi. Consequuntur iusto aliquam pariatur quo facere sed dolor ad assumenda.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, commodi. Consequuntur iusto aliquam pariatur quo facere sed dolor ad assumenda.</p>
                <button type="submit" className='submit'>Learn More</button>
            </div>
        </div>
    );
}

export default About;
