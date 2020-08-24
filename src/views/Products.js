import React, { useEffect, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import { useLocation } from "react-router-dom";

const Products = (props) => {
    const { pathname } = useLocation();

    const title = '  المنتجات    '
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);

    }, [pathname]);
    const [itemState] = useState({
        items: [
            { id: 1, sale: '123$', price: '100$', title: 'شنطه باك خضراء', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/backpack-01-400x400.jpg' },
            { id: 2, sale: '123$', price: '100$', title: 'ترفيليشيوس تيشرت', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/shirt-02-front-600x600.jpg' },
            { id: 3, sale: '123$', price: '100$', title: 'دليل ترفيليشيوس', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/guide-01-400x400.jpg' },
            { id: 4, sale: '123$', price: '100$', title: 'مج  ابيض ', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/mug-04-400x400.jpg' },
            { id: 5, sale: '123$', price: '100$', title: 'مج ترفيليشيوس', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/mug-10-400x400.jpg' },
            { id: 6, sale: '123$', price: '100$', title: 'ترفيليشيوس تيشرت', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/shirt-02-front-600x600.jpg' },
            { id: 7, sale: '123$', price: '100$', title: 'دليل ترفيليشيوس', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/guide-01-400x400.jpg' },
            { id: 8, sale: '123$', price: '100$', title: 'مج ترفيليشيوس ابيض ', image: 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/mug-04-400x400.jpg' },
        
        ],
    })
    return (
        <div className="products">
            <BreadCrumb name={title} />
            <div className="container-fluid" data-aos="fade-in">
                <div className="row pt-5">
                    {itemState.items.map(item =>
                        <div className="col-md-3" key={item.id}>
                            <div className="products_slider-card" >

                                <div className="products_slider-imge">
                                    <span className="onsale">!خصومات</span>
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


                                    <button className="btn btn--full mt-4 ">المزيد</button>

                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
}
export default Products;