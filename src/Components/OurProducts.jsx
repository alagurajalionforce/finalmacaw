import React from 'react'
import BucketOne from "../Images/flyingpaintcan.png"
import BucketTwo from "../Images/emptypaintcan.png"
import FlyingPaint from "../Images/paint-fly.png"
import Bottom from "../Images/Vector 1.png"
import "../Styles/OurProducts.css"
const OurProducts = () => {

 function onMouseDownCaptureHandler(){
    console.log("iohhphj[oj[o")
 }
  
    return (
        <div className='Our-products'>
            <div className="heading">
                <h1>Our Products</h1>
                <p>Swipe to see other products</p>
            </div>
            <div className="paint-fly">
                <div className="paint-fly-con">
                    <img src={FlyingPaint} alt="" />
                </div>
            </div>
            <div className="Our-product-cor-con">
            <div className="cpr-card-three">
                    <img src={BucketTwo} alt="" />

                </div>
                <div className="cpr-card-one" onMouseDownCapture={onMouseDownCaptureHandler}>
                    <img src={BucketOne} alt="" />
                </div>
                <div className="cpr-card-two">
                    <img src={BucketTwo} alt="" />

                </div>
              
              
            </div>
            <div className="bottom">
                <img src={Bottom} alt="" />
            </div>

        </div>
    )
}

export default OurProducts