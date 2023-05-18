import React, { useState, useRef } from 'react'
import '../Styles/Colors.css'
import Static from '../Images/Rectangle 28.png'

function Colors() {
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [offsetX, setOffsetX] = useState(0)

  const colors = [
    {
      color: '#D94245',
      colorName: 'Red',
    },
    {
      color: '#F06A37',
      colorName: 'Orange',
    },
    {
      color: '#F5CB04',
      colorName: 'Yellow',
    },
    {
      color: '#1C9944',
      colorName: 'Green',
    },
    {
      color: '#0000FF',
      colorName: 'Blue',
    },
    {
      color: '#5A5177',
      colorName: 'Violet',
    },
    {
      color: '#A76B4C',
      colorName: 'Beige',
    },
    {
      color: '#514642',
      colorName: 'Neutral',
    },
    {
      color: '#514642',
      colorName: 'Neutral',
    },
    {
      color: '#514642',
      colorName: 'Neutral',
    },
    {
      color: '#514642',
      colorName: 'Neutral',
    },
    {
      color: '#514642',
      colorName: 'Neutral',
    },
    {
      color: '#514642',
      colorName: 'Neutral',
    },
  ]

  const MainColors = [
    {
      color: '#E5C0DC',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#F4E8DE',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#D6BF73',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#F0E3E0',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#70516F',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E0E0E0',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#D26E83',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#B55F97',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#F9B9C2',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E2AFB2',
      colorName: 'Blushing Bridge - 2190',
    },

    {
      color: '#BF6C85',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#78454D',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#CA93C0',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E6BFCF',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E8A1BB',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#F1E4DD',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E1C7D0',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#A36B87',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#714548',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#8D6364',
      colorName: 'Blushing Bridge - 2190',
    },

    {
      color: '#F0DDD9',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#F4E8DE',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#F5DDDB',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#D089BB',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#F3E2DF',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#81494D',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#F6C4D1',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E7D5D3',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#B37C98',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E2CED5',
      colorName: 'Blushing Bridge - 2190',
    },

    {
      color: '#BF6C85',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#78454D',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#CA93C0',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E6BFCF',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E8A1BB',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#F1E4DD',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#E1C7D0',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#A36B87',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#714548',
      colorName: 'Blushing Bridge - 2190',
    },
    {
      color: '#8D6364',
      colorName: 'Blushing Bridge - 2190',
    },
  ]

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

  const handleMouseUp = () => {
    setIsDragging(false)
  }
  return (
    <div>
      <section className="catlog-container">
        <div className="catlog-card">
          <div className="colors-heading">
            <h1>Colour Catalogue</h1>
          </div>
          <div className="catlog-con">
            <p>
              There is a perfect colour for every occasion, every space, every
              mood and every project. Use our colour catalogue to try a wall
              colour shade of your choice and bring your ideas to life.
            </p>
            <input
              style={{ fontSize: '18px', width: '37rem', marginLeft: '-35px' }}
              type="text"
              placeholder="Search by color name or code"
              className="typeone"
            />
          </div>
          <div className="catlog-colors">
            <div className="catlog-colors-card">
              {/* <div className="static-color">
                <img src={Static} alt="" />
              </div> */}
              <div style={{ width: '50rem' }}>
                <div
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
                    <div className="static-color">
                      <img src={Static} alt="" />
                    </div>
                    {/* Place your content here */}
                    {colors.map((product) => (
                      <>
                        <div
                          className="maped-color-card slider-content"
                          style={{ backgroundColor: product.color }}
                        >
                          {' '}
                          <p
                            style={{
                              marginTop: '6rem',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            {product.colorName}
                          </p>
                        </div>
                        <div> </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="colors-list">
          {MainColors.map((productone) => (
            <>
              <div>
                <div
                  className="color-list-card"
                  style={{ backgroundColor: productone.color }}
                ></div>
                <p>{productone.colorName}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Colors
