import React from 'react'
import '../Styles/Inspriron.css'
import CoroselOne from '../Images/carosal imgOne.png'
import CoroselTwo from '../Images/carosal imgTwo.png'
const Inspration = () => {
  return (
    <div>
      <div className="heading-one">
        <h1>Inspiration</h1>
      </div>
      <div className="inspiron-container">
        <div className="first-cor-one">
          <div className="cor-img">
            <img src={CoroselTwo} alt="" />
          </div>

          <h4>Style Guide</h4>
          <p>
            Browse through our wide range of paints, textures, patterns and
            styles.
          </p>
        </div>
        <div className="first-cor-two">
          <div className="cor-img">
            <img src={CoroselOne} alt="" />
          </div>

          <h4>Exterior Wall Paints</h4>
          <p>
            Browse through our wide range of paints, textures, patterns and
            styles.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Inspration
