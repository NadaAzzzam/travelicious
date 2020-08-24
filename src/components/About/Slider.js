
import React from 'react';
import SlickSlider from "react-slick";

const Slider = () => {
    const baseUrl = 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/08';

    let clientItem=[
        { image:'/post_paris_0'},
        { image:'/post_paris_0'},
        { image:'/post_paris_0'},
        { image:'/post_paris_0'},
        { image:'/post_paris_0'},
        { image:'/post_paris_0'},
       ];
       const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 1300,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        rtl: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
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
    
    return (
        <div className="container-fluid">
          <SlickSlider className="py-5" {...settings}>
        {
          clientItem.map((item , i) => 
            <div key={'slider'+i} >
              <img src={ `${baseUrl}${item.image}${i + 1}.jpg`} alt=""/>
            </div>
          )
        }
        
      </SlickSlider>   
        </div>

    );
}
export default Slider;