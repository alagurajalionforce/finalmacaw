import '../App.css'
import CEOimg from '../Images/Team 1.png'
import '../Styles/About.css'
import PaintSplione from '../Images/paint-spill-3 1.png'
import PaintSpliTwo from '../Images/paint-spill-4 1.png'
import OurStory from '../Images/ourStory.png'
import Aboutus from '../Images/aboutus.png'
import Mask from '../Images/Mask group (2).png'
function AboutUs() {
  return (
    <div>
      {/* aboutus baner start */}
      <section className="section-gap">
        <div className="w-100 about-us">
          <img className="w-100 mask-img" src={Mask} />
          <img className="w-100" src={Aboutus} />

          <p>About Us</p>
        </div>
      </section>
      {/* aboutus baner end */}

      {/* our story start */}
      <section className="section-gap">
        <div className="d-flex container">
          <div className="w-50  ourstorycontainer">
            <p className="our-story-header">Our Story</p>
            <p className="our-story-content">
              At Macaw, we believe that every home deserves to be adorned with
              vibrant colors that reflect success and joy. Our paint brand was
              born out of a desire to make bold statements through our products,
              just like the stunningly-hued New World parrots – Macaws! We are
              devoted to bringing Flying Colors into homes across India by
              providing premium quality paints and innovative solutions in
              collaboration with our customers. With an unwavering commitment
              towards integrity, creativity and innovation; let us journey
              together on this mission of delivering happiness and contentment
              via modern color palettes for your abode.
            </p>
          </div>
          <div className="w-50  ourstorycontainer">
            <div className="our-story-img">
              <img src={OurStory} />
            </div>
          </div>
        </div>
      </section>
      {/* our story end */}

      {/* section card start */}
      <section className="section-gap">
        <div className="container-card">
          <div className="d-flex justify">
            <div className="w-50 vision-mission">
              {/* <div className="vision">
                <p className="vision-position vision-mission-text">Vision</p>
                <img src={PaintSplione} alt="" />
              </div> */}
              <div className="vision-content">
              <span className="vision-content-head">Vision</span>
                <p>
                To be the forefront of India's Paints industry, where we prioritize our values
                 and innovate quality products and services that contribute to India's growth.
                  At our company, we strive to make an impact and constantly push ourselves 
                  towards success.
                </p>
              </div>
            </div>
            <div className="w-50 vision-mission">
             {/*  <div className="mission">
                <p className="mission-position vision-mission-text">Mision</p>
                <img src={PaintSpliTwo} alt="" />
              </div> */}
              <div className="vision-content">
              <span className="vision-content-head">Mission</span>
                <p>
                Our mission is to earn the trust of our stakeholders by
                 swiftly implementing dynamic initiatives that align with
                  our core values and long-term vision. With our innovative 
                  paint solutions, we strive to bring joy and happiness to people's
                   lives. Join us in delivering a splash of vibrant colors to the world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section card end */}

      <div className="container">
        {/* section CEO Start */}
        {/* <section className="section-gap">
          <div className="d-flex" style={{ marginTop: '50px' }}>
            <div className="w-50 ">
              <div className="ceo-section-one">
                <img src={CEOimg} alt="" />
              </div>
            </div>
            <div className="w-50  flex-center">
              <p className="ceo clr-blu">CEO</p>
              <p className="ceo">John Doe</p>
              <p className="abut-ceo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section> */}
        {/* section CEO end */}
        {/* section CEO Start */}
       {/*  <section className="section-gap">
          <div className="d-flex">
            <div className="w-50  flex-center">
              <p className="ceo clr-blu">CEO</p>
              <p className="ceo">John Doe</p>
              <p className="abut-ceo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-50 ">
              <div className="ceo-section-one">
                <img src={CEOimg} alt="" />
              </div>
            </div>
          </div>
        </section> */}
        {/* section CEO end */}
      </div>
    </div>
  )
}

export default AboutUs
