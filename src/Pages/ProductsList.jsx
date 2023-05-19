import React, { useState, useRef, useEffect } from 'react'
import Mask from '../Images/Mask group.png'
import '../Styles/Colors.css'
import '../Styles/ProductList.css'
import Aboutus from '../Images/Vector 3 (1).png'
import BucketOne from '../Images/flyingpaintcan.png'
import BucketFive from '../Images/Paint cans-01.png'
import BucketTwo from '../Images/Paint cans-03.png'
import BucketThree from '../Images/Paint cans-05.png'
import BucketFour from '../Images/Paint cans-07.png'
import ellipseRed from '../Images/Ellipse 5.png'
import ellipse from '../Images/Ellipse 5 (2).png'

import g1 from "../Images/Group 67.png"
import g2 from "../Images/Group 71.png"
import g3 from "../Images/Group 73.png"

const ProductsList = () => {
  const [bg, setBg] = useState()
  const colors = [
    {
      id: 1,
      name: 'Interior UnderCoat',
      img: BucketOne,
      isActive: true,
      background: '#c4ddef',
    },
    {
      id: 2,
      name: 'Acrylic Putty',
      img: BucketFive,
      isActive: false,
      background: '#f79e9e',
    },
    { id: 3, name: 'Aura Prime Luxury Interior Emulsion', img: BucketTwo, isActive: false },
    { id: 4, name: 'Swoosh Luxury Emulsion', img: BucketThree, isActive: false },
    { id: 5, name: 'Chromagic Premium Emulsion', img: BucketFour, isActive: false },
  ]
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [active, setActive] = useState(colors)

  const [activeName, setActiveName] = useState(colors[0].name)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const containerWidth = containerRef.current.offsetWidth
    const maxOffsetX = containerWidth
    const newOffsetX = offsetX + (e.clientX - startX)
    setOffsetX(Math.max(Math.min(maxOffsetX, newOffsetX)), 0)
    setStartX(e.clientX)
  }
  useEffect(() => {
    console.log('====================================')
    console.log(bg)
    console.log('====================================')
  }, [bg])

  const handleMouseUp = () => {
    setIsDragging(false)
  }
  const handleClick = (cardId) => {
    setActiveName(colors[cardId].name)
    const updatedCards = colors.map((card) =>
      card.id === cardId
        ? { ...card, isActive: true }
        : { ...card, isActive: false },
    )
    setActive(updatedCards)
    setBg(cardId - 1)
  }
  return (
    <div>
      <section className="section-gap">
        <div className="w-100 about-us">
          <img className="w-100 mask-img" src={Mask} />
          <img className="w-100" src={Aboutus} />
          <p>Products for your Interior</p>
        </div>
      </section>
      <section className="section-gap">
        <div style={{ height: '22rem' }}>
          <div>
            <div
              style={{ height: '23rem' }}
              className="mapped-color drag-slide-container"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className="drag-slide-content"
                style={{ transform: `translateX(${offsetX}px)` }}
              >
                {active.map((product) => (
                  <>
                    <div
                      className={`${product?.isActive ? 'boxActive' : 'box'}`}
                      style={{
                        background: product?.isActive
                          ? product?.background
                          : '',
                      }}
                      onClick={() => {
                        handleClick(product?.id)
                      }}
                    >
                      <img
                        style={{
                          height: '27rem',
                          display: 'flex',
                          padding: '15px',
                          marginTop: '-209px',
                          marginLeft: '-3rem',
                        }}
                        src={product?.img}
                      />
                      <p
                        style={{
                          marginTop: '-2rem',
                          // display: 'flex',
                          marginLeft: '3.5rem',
                          justifyContent: 'center',
                        }}
                      >
                        {product.name}
                      </p>
                    </div>
                    <div> </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderBottom: '5px solid #E8E8E8',
            width: '70rem',
            margin:"1rem",
            marginLeft:"12.5rem"
          }}
        ></div>
        <div className="content" style={{ background: colors[bg]?.background }}>
          <div className="heading">
            <img
              style={{
                height: '45rem',
                // display: 'flex',
                padding: '15px',
                marginTop: '-188px',
                position: 'absolute',
                top: '56rem',
                marginLeft: '-33rem',
              }}
              src={BucketOne}
            />
            <div className="side">
              <p className='headline'>{activeName}</p>
              <p>
                Amendo and Dura Fill interior primer (Premium & Economy quality)
              </p>
            </div>
          </div>
          <div className="details">
            <p>
              Achieve the perfect interior finish with two of our best
              undercoats - Amendo and Dura Fill. Whether you're after a premium
              quality primer for unbeatable coverage, or an economical option
              that won't break the bank, both products provide excellent
              adhesion strength to ensure your walls look as good in years to
              come as they do now. Find everything you need for all your
              interior painting projects here!
            </p>
          </div>
          <p className="features">Features</p>
          <div className="img">
            <div className="imgHead">
              <img
                className="img1"
                //src={colors[bg]?.background == '#c4ddef' ? ellipse : ellipseRed}
                src={g1}
              />
              <p>Crack Bridging</p>
            </div>
            <div className="imgHead">
              <img
                className="img1"
                src={g2}
              />

              <p>2-IN-1 Emulsion</p>
            </div>
            <div className="imgHead">
              <img
                className="img1"
                src={g3}
              />

              <p>Excellent Coverage</p>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      {/* <div className="color-list-card"></div> */}
    </div>
  )
}

export default ProductsList
