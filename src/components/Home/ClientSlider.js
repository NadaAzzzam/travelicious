import React from 'react';
import Slider from "react-slick";

const ClientSlider = (props) => {

  
      // Ref for our element

  let clientItem=[
    { image:'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/logo-hotel-california.png'},
    { image:'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/logo-bold-news.png'},
    { image:'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/logo-applauz.png'},
    { image:'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/logo-celeste.png'},
    { image:'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/logo-hotel-berg.png'},
    { image:'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/logo-estato.png'},
    { image:'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/logo-bello.png'}
   ]
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <div className="clientSlider">
      <div className="container " data-aos="fade-down" >
        <div className="heading-secondary">
          <h2><span className="bt_bb_headline_superheadline">
            <span className="btBreadCrumbs">
              <span> عملائنا</span>
            </span>
          </span>
            <span className="bt_bb_headline_content">
              <span className="font-weight-normal">  رحله <span className="underline_text">سعيده </span>
              </span>
            </span>
          </h2>
          <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. </p>
        </div>
        <hr />
        <div className="clientSlider-slider">
        <Slider {...settings}>
          {
            clientItem.map((item , i) => 
              <div className="clientSlider-slider-image" key={'slider'+i} >
                <img src={item.image} alt=""/>
              </div>
            )
          }
          
        </Slider>
        </div>
        
      </div>
    </div>

  )
}
export default ClientSlider;
