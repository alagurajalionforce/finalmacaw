import '../App.css'
import CEOimg from '../Images/Team 1.png'
import '../Styles/Products.css'
import PaintSplione from '../Images/paint-spill-3 1.png'
import PaintSpliTwo from '../Images/paint-spill-4 1.png'
import OurStory from '../Images/ourStory.png'
import Aboutus from '../Images/aboutus.png'
import Mask from '../Images/Mask group (2).png'

import ppb1 from '../Images/ppb1.jpg'
import ppb2 from '../Images/ppb2.jpg'
import ppb3 from '../Images/ppb3.jpg'

import banner from '../Images/product-banner.png'
import { useNavigate } from 'react-router-dom'
function Products() {
    const navigate = useNavigate();
  return (
    <div>
      {/* aboutus baner start */}
      <section className="section-gap">
        <div className="w-100 about-us">
          <img className="w-100 mask-img bannerimg" src={banner} />
          <img className="w-100" src={Aboutus} />
          <p>Products</p>
        </div>
      </section>
      {/* aboutus baner end */}

      {/* our story start */}
      <section className="section-gap">
        <div className="d-flex container con1" onClick={()=>{
            navigate("/productsList")
        }}>
          <div className="ppcontainer">
            <div className="imgContainer">
              <img src={ppb1} />
            </div>
            <div className="TextContainer">
              <div>
                Products for <br /> your <b>Interior</b>
              </div>{' '}
            </div>
          </div>
        </div>
        <div className="d-flex container con2">
          <div className="ppcontainer">
            <div className="TextContainer">
              <div>
                Products for <br /> your <b>Exterior</b>
              </div>{' '}
            </div>
            <div className="imgContainer">
              <img src={ppb2} />
            </div>
          </div>
        </div>
        <div className="d-flex container con3">
          <div className="ppcontainer">
            <div className="imgContainer">
              <img src={ppb3} />
            </div>
            <div className="TextContainer">
              <div>
                Products for <br /> <b>Wood & Metal</b>
              </div>{' '}
            </div>
          </div>
        </div>
      </section>
      {/* our story end */}
    </div>
  )
}

export default Products
