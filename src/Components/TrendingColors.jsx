import React , {useState} from 'react'
import "../Styles/TrendingColor.css"
import Cardone from "../Images/Cardone.png"
import Cardtwo from "../Images/cardtwo.png"
import Cardthree from "../Images/cardthree.png"
import CardFour from "../Images/cardfour.png"
import CardFive from "../Images/cardfive.png"

import c4c1 from "../Images/c4c1.png"
import c4c2 from "../Images/c4c2.png"
import c4c3 from "../Images/c4c3.png"
import c4c4 from "../Images/c4c4.png"


import {AiOutlineClose} from "react-icons/ai";
import {RiCheckLine} from "react-icons/ri";

const mountedStyle = {
    animation: "inAnimation 0.5s ease-in"
  };
  const unmountedStyle = {
    animation: "outAnimation 0.5s ease-out",
    animationFillMode: "forwards"
  };
  const colorCon = [
    {
        img:c4c1,
        name:"Vivid red",
        code:"#CC402B"
    },
    {
        img:c4c2,
        name:"Orange",
        code:"#EC7B3C"
    },
    {
        img:c4c3,
        name:"Olive Green",
        code:"#B9B03F"
    },
    {
        img:c4c4,
        name:"Light Purple",
        code:"#C491C7"
    }
  ]

const TrendingColors = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [actColorIn, setActColorIn] = useState(0);
    const [currentColor, setCurrentColor] = useState({
        img:c4c1,
        name:"Vivid red",
        code:"#CC402B"
    });

    const onColorChange=(data,i)=>{
        setActColorIn(i)
        setCurrentColor(data)
    }
    
    return (
        <div>
            <div className="heading-one">
                <h1>Trending Colors</h1>
            </div>
            <div className="img-cards">
                        <div
                            className="transitionDiv "
                            style={showDiv ? mountedStyle : unmountedStyle}
                        >
                            
                                <img src={currentColor.img} alt="" />
                                <div className='closebtn'  onClick={() => setShowDiv(!showDiv)}>
                                    {/* <AiOutlineClose size={30} color='#fff'/> */}
                                    X
                                </div>
                            <div className='colorselection'>
                                <div className='colorbox'  style={{backgroundColor:currentColor.code}}>
                                </div>
                                <div className='colorname'>
                                    <div >
                                        {currentColor.name}
                                    </div>
                                    <div className='colorcode'>
                                        {currentColor.code}
                                    </div>
                                </div>
                                <div className='trycaption'>
                                    Try
                                </div>
                                {colorCon.map((data,i)=>
                                <div className='colorbox' onClick={()=>{onColorChange(data,i)}} style={{backgroundColor:data.code,cursor:"pointer"}}>
                                    {actColorIn == i ?
                                    <RiCheckLine
                                        size={40}
                                        color="#fff"
                                    /> :"" }
                                </div>)}
                            </div>
                            
                        </div>
                {<>
                
                
                    <div className="first-set-card">
                        <div className="card-img">
                            <div className='card-code'>
                                <div className='card-colorbox'  style={{backgroundColor:"#F4D250"}}>
                                </div>
                                <div className='card-colorname'>
                                    <div >
                                        Stark yellow
                                    </div>
                                    <div className='card-colorcode'>
                                        #F4D250
                                    </div>
                                </div>
                            </div>
                            <img src={Cardone} alt="" />
                        </div>
                        <div className="card-img">
                            <div className='card-code'>
                                <div className='card-colorbox'  style={{backgroundColor:"#29A8B7"}}>
                                </div>
                                <div className='card-colorname'>
                                    <div >
                                        Water blue
                                    </div>
                                    <div className='card-colorcode'>
                                        #29A8B7
                                    </div>
                                </div>
                            </div>
                            <img src={Cardtwo} alt="" />
                        </div>
                    </div>
                    <div className="card-img-big">
                        <div className='card-code'>
                            <div className='card-colorbox'  style={{backgroundColor:"#B7FFF5"}}>
                            </div>
                            <div className='card-colorname'>
                                <div >
                                    Ice Blue
                                </div>
                                <div className='card-colorcode'>
                                    #B7FFF5
                                </div>
                            </div>
                        </div>
                        <img src={Cardthree} alt="" />
                    </div>
                    <div className="first-set-card">
                        <div className="card-img" onClick={() => setShowDiv(!showDiv)} style={{cursor:"pointer"}}>
                            <div className='card-code'>
                                <div className='card-colorbox'  style={{backgroundColor:"#CC402B"}}>
                                </div>
                                <div className='card-colorname'>
                                    <div >
                                        Vivid Red
                                    </div>
                                    <div className='card-colorcode'>
                                        #CC402B
                                    </div>
                                </div>
                            </div>
                            <img src={CardFour} alt="" />
                        </div>
                        <div className="card-img">
                            <div className='card-code'>
                                <div className='card-colorbox'  style={{backgroundColor:"#ABC265"}}>
                                </div>
                                <div className='card-colorname'>
                                    <div >
                                        Olive Green
                                    </div>
                                    <div className='card-colorcode'>
                                        #ABC265
                                    </div>
                                </div>
                            </div>
                            <img src={CardFive} alt="" />
                        </div>
                    </div>
                </>}

                        </div>
                        <div className="view-more-btn">
                            <button>View More</button>
                        </div>
                    </div>
    )
}

export default TrendingColors
