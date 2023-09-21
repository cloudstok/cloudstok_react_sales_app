import React from 'react'
import '../Slider/slider.css'
import Slider from "react-slick"
// import "~slick-carousel/slick/slick.css"
// import "~slick-carousel/slick/slick-theme.css"
import mongo from '../../../assets/images/mongoDb.jpg'
import linux from '../../../assets/images/linux.png'
import window from '../../../assets/images/window.png'
import mysql from '../../../assets/images/mysql.jpg'
import node from '../../../assets/images/node.jpg'
import ios from '../../../assets/images/ios.jpg'
import java from '../../../assets/images/java.jpg'
import jenkins from '../../../assets/images/jenkins.jpg'

const SliderComponent = () => {

    var settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const data = [
        {
            img: mongo,
            para: "MongoDB"
        },
        {
            img: linux,
            para: "Linux"
        },
        {
            img: window,
            para: "Window"
        },
        {
            img: mysql,
            para: "Mysql"
        },
        {
            img: node,
            para: "Node"
        },
        {
            img: ios,
            para: "Ios"
        },
        {
            img: java,
            para: "Java"
        },
        {
            img: jenkins,
            para: "Jenkins"
        },
    ]
  return (
  <>
    <div className='slider-section'>
        <h1 style={{color:"black"}}>Technology stack available at your finger tips</h1>
        <div>
        <Slider className="slider-container" {...settings}>
        {
                data.map((el, i) =>(
                    <div className="slider-box">
                <div className="slider-img">
                  <div>
                  <img src={el.img} alt="" />
                    <p className="mongo-para">{el.para}</p>
                  </div>
                </div>
                
            </div>
                ))
            }
        </Slider>
      </div>
      
    </div>
  
  </>
  )
}

export default SliderComponent