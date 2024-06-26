import './styles/Products.scss'
import imgOne from '../images/arabica.png'
import imgTwo from '../images/botero.png'
import imgThree from '../images/patchRoast.png'
import imgFour from '../images/groundCoffee.png'
import imgFive from '../images/sacredGround.png'
import imgSix from '../images/presto.png'

const Products = () => {
    return (
<div className='products'>
    <h3 className='heading'>OUR POPULAR PRODUCTS</h3>
<div className="container mt-2">
  <div className="row">
    <div className="col-md-6 col-xl-3">
      <div className="card card-block">
    <img src={imgOne} alt="Photo of sunset"></img>
        <h5 className="card-title mt-3 mb-3">Arabica Coffee</h5>

        <div className='details'>
        <button className='price'>25$</button> 
        <button type='submit' className='order'>Add To Cart</button>
        </div>
  </div>
    </div>
    <div className="col-md-6 col-xl-3">
      <div className="card card-block">
    <img src={imgTwo} alt="Photo of sunset"></img>
        <h5 className="card-title  mt-3 mb-3">Botero Coffee</h5>
        <div className='details'>
        <button className='price'>25$</button> 
        <button type='submit' className='order'>Add To Cart</button>
        </div>
  </div>
    </div>
    <div className="col-md-6 col-xl-3">
      <div className="card card-block">
    <img src={imgThree} alt="Photo of sunset"></img>
        <h5 className="card-title  mt-3 mb-3">Patch Roast</h5>
        <div className='details'>
        <button className='price'>25$</button> 
        <button type='submit' className='order'>Add To Cart</button>
        </div>
  </div>
    </div>
    <div className="col-md-6 col-xl-3">
      <div className="card ">
    <img src={imgFour} alt="Photo of sunset"></img>
        <h5 className="card-title  mt-3 mb-3">Ground Coffee</h5>
        <div className='details'>
        <button className='price'>25$</button> 
        <button type='submit' className='order'>Add To Cart</button>
        </div>
  </div>
    </div>
    <div className="col-md-6 col-xl-3">
      <div className="card card-block">
    <img src={imgFive} alt="Photo of sunset"></img>
        <h5 className="card-title  mt-3 mb-3">Sacred Ground</h5>
        <div className='details'>
        <button className='price'>25$</button> 
        <button type='submit' className='order'>Add To Cart</button>
        </div>
  </div>
    </div>
    <div className="col-md-6 col-xl-3">
      <div className="card card-block">
    <img src={imgSix} alt="Photo of sunset"></img>
        <h5 className="card-title  mt-3 mb-3">Presto Coffee</h5>
        <div className='details'>
        <button className='price'>25$</button> 
        <button type='submit' className='order'>Add To Cart</button>
        </div>
  </div>
    </div>    
  </div>
  
</div>
</div>
    );
}

export default Products;
