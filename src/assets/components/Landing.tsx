import "./styles/Landing.scss"
import LandingImage from "../images/main.png"

const Landing = () => {
    return (
    <div className="info">
<div className="main-text">
    <h1 className="heading">START YOUR DAY <br></br> WITH COFFEE</h1>
    <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aut ex veniam ea reprehenderit<br></br>consequuntur, cum tenetur id unde rerum.</p>
    <button type="submit" className="submit">Shop Now</button>
</div>
<div className="main-image">
    <img src={LandingImage} alt="Main Section Image"  className="landingImage"/>
</div>
    </div>
    );
}

export default Landing;
