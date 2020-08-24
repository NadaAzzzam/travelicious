import React, {  useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const ProductsSlider = (props) => {

  // Ref for our element



  const [itemState] = useState({
    items: [
      { id: 1, sale: '123$', price: '100$', title: 'شنطه باك خضراء', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/backpack-01-400x400.jpg' },
      { id: 2, sale: '123$', price: '100$', title: 'ترفيليشيوس تيشرت', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/shirt-02-front-600x600.jpg' },
      { id: 3, sale: '123$', price: '100$', title: 'دليل ترفيليشيوس', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/guide-01-400x400.jpg' },
      { id: 4, sale: '123$', price: '100$', title: 'مج ترفيليشيوس  ', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/mug-04-400x400.jpg' },
      { id: 5, sale: '123$', price: '100$', title: 'مج ترفيليشيوس', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/mug-10-400x400.jpg' }
    ],

  })
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
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
  }

  
  return (

    <div className="container">


        <div className="products_slider">
 <Slider {...settings}>
          {itemState.items.map(item =>
            <div className="products_slider-card  " key={item.id}>

              <div className="products_slider-imge">
                <img src={item.image} alt="" />
              </div>
              <div className="products_slider-price">
                <h3>
                  {item.title}
                </h3>
                <hr />
                <div>
                  <span>
                    <del>{item.sale}</del>
                  </span>
                  <span className="font-weight-bolder">{item.price}</span>
                </div>


                <Link to="/products" className="btn btn--full mt-3 ">المزيد</Link>

              </div>
            </div>
          )}
        </Slider>

        </div>
       
    </div>
  );
}
export default ProductsSlider;