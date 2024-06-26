import './styles/OurCustomers.scss'
import { LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import ClientOne from '../images/client1.jpg';
import ClientTwo from '../images/client2.jpg';
import ClientThree from '../images/client3.jpg';

const OurCustomers = () => {
    return (
        <>
<div className="customers">
        <h3>Our Customer's Reviews</h3>
    <div className="container">
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4 size">
      <img src={ClientOne} className="img rounded-start" alt="Client #!"></img>
    </div>
    <div className="col-md">
      <div className="card-body">
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarHalfAltSolid /></span>
        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur deleniti explicabo repudiandae sapiente esse</p>
        <p className="card-text"><small className="text-body-secondary">Yasin Arafat</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4 size">
      <img src={ClientTwo} className="img rounded-start" alt="Client #2"></img>
    </div>
    <div className="col-md">
      <div className="card-body">
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur deleniti explicabo repudiandae sapiente esse.</p>
        <p className="card-text"><small className="text-body-secondary">Elon Must</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4 size">
      <img src={ClientThree} className="img rounded-start" alt="Client #3"></img>
    </div>
    <div className="col-md">
      <div className="card-body">
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <span className='star'><LiaStarSolid /></span>
        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur deleniti explicabo repudiandae sapiente esse</p>
        <p className="card-text"><small className="text-body-secondary">Samantha Hokins</small></p>
      </div>
    </div>
  </div>
</div>


    </div>
        </div>
        </>
    );
}

export default OurCustomers;
