import React, { useEffect, useState } from 'react'
import OurProducts from '../Components/OurProducts'
import Trending from '../Components/TrendingColors'
import Inspration from '../Components/Inspration'
import '../Styles/Home.css'
import BannerImg from '../Images/Slide-banner-03.png'
import YellowBanner from '../Images/Whychooseus.png'
import Whyone from '../Images/whyusimg-1.png'
import WhyTwo from '../Images/whyusimg-2.png'
import WhyThree from '../Images/whyusimg-3.png'
import ProductsCorosel from '../Components/ProductsCorosel'
import { Slide, toast } from 'react-toastify'
import emailjs from 'emailjs-com'
function Products() {
  const [width, setWidth] = useState(0)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    console.log(formData, 'FORMDATA')
  }, [formData])
  const onSubmit = (e) => {
    e.preventDefault()
    const response = emailjs
      .send(
        'service_t58j87f',
        'template_ud6rocu',
        {
          from_name: formData?.from_name,
          message: formData?.message,
          mobile: formData?.mobile,
          pincode: formData?.pincode,
          email: formData?.email,
        },
        'mR866LagoSj55nRXq',
      )
      .then(
        (result) => {
          console.log('result')
          if (result?.text == 'OK') {
            console.log('result', result?.text)
            alert('submitted successfully')
          }
        },
        (error) => {
          console.log(error.text)
        },
      )
    // console.log(response?.,"RESPOSNE");
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleWidth = (e) => {
    setWidth(e.target.value)
    if (e?.target?.value < 50) {
      setWidth(0)
    } else {
      setWidth(100)
    }
  }

  return (
    <div>
      <section className="Products-container">
          <div className='bannerText' style={{ opacity: `${100 - width}%` }}>
            Add Macaw to your life
          </div>
        <div className="BG-img">
          <img
            src={BannerImg}
            alt=""
            style={{ filter: `grayscale(${100 - width}%)` }}
          />
        </div>

        <div className="slider">
          <input
            type="range"
            onChange={(e) => {
              setWidth(e?.target?.value)
            }}
            onG
            onMouseUp={(e) => {
              handleWidth(e)
            }}
            value={width}
          />
          <div className="slide-close-con">
            <div className="slider-close" style={{ width: `${width}%` }}></div>
          </div>
        </div>
      </section>
      <section>
        <div className="ourstory">
          <p>Our story</p>
          <br/>
          <br/>
          <p style={{ fontWweight: 700, fontSize: '18px', color: 'black' }}>
              Introducing Macaw Paints - a brand that stands out from the rest. Our dream is to decorate homes that exude success and boast "flying colors." 
              We took that vision quite literally, and realized that every home deserves to flaunt a vibrant and eye-catching exterior. Thus, Macaw Paints was
              born - named after the illustriously colorful New World parrot. Our signature coat will make your
                home shine with vibrancy, reflecting your accomplishments and success to the world.
          </p>
        </div>
      </section>
          <br/>
      <section>
        <ProductsCorosel />
        {/* <OurProducts /> */}
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <section className="products-body">
        <div className="sub-con-cen">
          <div className="submit-con">
            <div className="submit-cards">
              <div className="heading-submit">
                <h1>Get in Touch</h1>
                <p style={{fontSize:"18px",fontWeight:700}}>
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
                  name="from_name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="typetwo"
                  placeholder="Mobile*"
                  name="mobile"
                  onChange={handleChange}
                />
              </div>
              <div className="input-set-two">
                <input
                  type="text"
                  className="typetwo"
                  placeholder="Email*"
                  name="email"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="typetwo"
                  placeholder="Pincode*"
                  name="pincode"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="typeone"
                  placeholder="Message"
                  name="message"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="submit-btn">
              <button onClick={(e) => onSubmit(e)}>Submit</button>
            </div>
          </div>
        </div>
        {/* <div className="yellow-banner-con">
          <div className="yellow-ban-data">
            <div className="banner-card-first">
              <h1>Why Choose Us?</h1>
            </div>
            <div className="banner-card">
              <img src={Whyone} alt="" />
              <p>Expert Color Consultancy</p>
            </div>
            <div className="banner-card">
              <img src={WhyTwo} alt="" />
              <p>Professionally Trained Painters</p>
            </div>
            <div className="banner-card">
              <img src={WhyThree} alt="" />
              <p>Expert Color Consultancy</p>
            </div>
          </div>
          <img src={YellowBanner} alt="" />
        </div> */}
      </section>
      {/* <section>
        <Trending />
      </section>
      <section>
        <Inspration />
      </section> */}
    </div>
  )
}

export default Products
