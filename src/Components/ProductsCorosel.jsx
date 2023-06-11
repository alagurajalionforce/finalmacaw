import React, { useState } from 'react'
import BucketOne from '../Images/flyingpaintcan.png'
import BucketFive from '../Images/Paint cans-01.png'
import BucketTwo from '../Images/Paint cans-03.png'
import BucketThree from '../Images/Paint cans-05.png'
import BucketFour from '../Images/Paint cans-07.png'

import bluePaint from '../Images/paint-fly.png'
// import BucketTwo from '../Images/emptypaintcan.png'
import '../Styles/ProductCorosel.css'
import FlyingPaint from '../Images/paint-fly.png'
import Bottom from '../Images/Vector 1.png'
import uuidv4 from 'uuid'

import Carousel from 'react-spring-3d-carousel'

const ProductsCorosel = () => {
  const [click, setClick] = useState(0)

  const slides = [
    {
      key: uuidv4(),
      content: <img src={BucketOne} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={BucketTwo} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={BucketThree} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={BucketFour} alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src={BucketFive} alt="2" />,
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => {
        setClick(index)
      },
    }
  })
  return (
    <div>
      <div className="product-cor-con">
        <div
          className="product-cor-images"
          style={{
            width: '80%',
            height: '400px',
            margin: '0 auto',
            // background: 'yellow',
          }}
        >
          <Carousel
            style={{ background: 'orange' }}
            slides={slides}
            goToSlide={click}
          />

          {/* <div className="orosel-cardd active">
            <img src={BucketOne} alt="" />
          </div>
          <div className="orosel-cardd">
            <img src={BucketOne} alt="" />
          </div>
          <div className="orosel-cardd">
            <img src={BucketOne} alt="" />
          </div>
          <div className="orosel-cardd">
            <img src={BucketOne} alt="" />
          </div>
          <div className="orosel-cardd">
            <img src={BucketOne} alt="" />
          </div> */}
        </div>
        <div className="bottom-con">
          <img src={Bottom} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductsCorosel
