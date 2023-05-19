import '../App.css'
import contact from '../Images/Mask group (3).png'

import '../Styles/About.css'
import '../Styles/Products.css'

import fc from "../Images/cc.png"
import fw from "../Images/cw.png"
import fm from "../Images/cm.png"
function ContactUs() {
  return (
    <div>
      <section className="section-gap">
        <div className="w-100 about-us contact-us">
          <img className="w-100" src={contact} />
          <p>Contact Us</p>
        </div>
      </section>
      <section className="products-body">
        <div className="sub-con-cen">
          <div className="submit-con">
            <div className="submit-cards">
              <div className="heading-submit">
                <h1>Get in Touch</h1>
                <p>
                  Looking for something? Drop your query and will contact you.
                </p>
              </div>

              <div className="input-set-one">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="typeone"
                />
                <input
                  type="text"
                  className="typetwo"
                  placeholder="Full Name*"
                />
                <input type="text" className="typetwo" placeholder="Mobile*" />
              </div>
              <div className="input-set-two">
                <input type="text" className="typetwo" placeholder="Email*" />
                <input type="text" className="typetwo" placeholder="Pincode*" />
                <input type="text" className="typeone" placeholder="Message" />
              </div>
            </div>
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </section>
      <section >

          <div className='contact-detail'>
              <div className="support">
                <div className="Head">
                  <p>Contact</p>
                </div>
                <div className="cont">

                  
                  <p><img src={fc} />Toll free - 1800 123 1003</p>
                  
                </div>
                <div className="cont">
                  <p><img src={fw} />Whatsapp - 81005 56677</p>
                </div>
                <div className="cont">
                  <p><img src={fm} />Email - help@macaw.com</p>
                </div>
              </div>

                <div className="address">
                <div className="Head">
                  <p>Address</p>
                </div>
                  <p>Premises no.03-319, DH-6/11,
                    <br/>
                    Action Area-1D, Street No. 319,
                    <br/>
                    New Town, Kolkata-700156</p>
                </div>

          </div>

          <br/>
          <br/>
          <br/>
      </section>
     {/*  <section>
        <div className="map-section">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className="store-locator">Store Locator</p>
            <input
              type="text"
              style={{
                border: '1px solid #146AB0',
                borderRadius: '10px',
                fontFamily: 'Comfortaa',
                fontWeight: 400,
                width: '257px',
                height: '36px',
                fontSize: '16px',
              }}
              placeholder="Enter Pincode"
            />
          </div>

          <div className="map-location">
            <div className="scroll">
              <div className="map-location-one">
                <p className="map-header">Store ABC</p>
                <div className="d-flex">
                  <div className="w-70">
                    <p className="map-content pd">
                      Opens 10AM - Closes 8PM | PH: 9876543210
                    </p>
                    <p className="map-content pd">
                      122 Gandhi Nagar, 2nd Main Road
                    </p>
                    <p className="km pd">5.6 km (7 mins)</p>
                    <p className="products-services">PRODUCTS & SERVICES </p>
                  </div>
                  <div className="w-30 d-flex">
                    <div className="blue"></div>
                    <div className="white"></div>
                  </div>
                </div>
                <p className="border"></p>
              </div>
              <div className="map-location-one">
                <p className="map-header">Store ABC</p>
                <p className="map-content pd">
                  Opens 10AM - Closes 8PM | PH: 9876543210
                </p>
                <p className="map-content pd">
                  122 Gandhi Nagar, 2nd Main Road
                </p>
                <p className="km pd">5.6 km (7 mins)</p>
                <p className="products-services">PRODUCTS & SERVICES </p>
                <p className="border"></p>
              </div>
              <div className="map-location-one">
                <p className="map-header">Store ABC</p>
                <p className="map-content pd">
                  Opens 10AM - Closes 8PM | PH: 9876543210
                </p>
                <p className="map-content pd">
                  122 Gandhi Nagar, 2nd Main Road
                </p>
                <p className="km pd">5.6 km (7 mins)</p>
                <p className="products-services">PRODUCTS & SERVICES </p>
                <p className="border"></p>
              </div>
            </div>

            <div className="map-location-two">
              <iframe
                className="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default ContactUs
