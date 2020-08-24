import React, { useState } from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";



const BlogView = (props) => {
    const baseUrl = 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/08';
    const [itemState] = useState({
        blogList: [
            {
                blogTitle: 'باريس الساحره ', id: 1, items: [
                    { id: 1, title: 'باريس الساحره ', image: baseUrl + '/post_paris_01.jpg' },
                    { id: 2, title: 'مصر العظيمه', image: baseUrl + '/post_paris_02.jpg' },
                    { id: 3, title: 'بيروت الجميله', image: baseUrl + '/post_paris_03.jpg' },
                ],
                 settings : {
                    customPaging: function (i) {
                        return (
                            <Link to="/">
                                <img src={`${baseUrl}/post_paris_0${i + 1}.jpg`} alt="" />
                            </Link>
                        );
                    },
                    dots: true,
                    dotsClass: "slick-dots slick-thumb",
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    cssEase: "linear",
                }
            },
            {
                blogTitle: 'مصر العظيمه ', id: 2, items: [
                    { id: 1, title: 'باريس الساحره ', image: baseUrl + '/post_paris_02.jpg' },
                    { id: 2, title: 'مصر العظيمه', image: baseUrl + '/post_paris_03.jpg' },
                    { id: 3, title: 'بيروت الجميله', image: baseUrl + '/post_paris_04.jpg' },
                ],
                settings : {
                   customPaging: function (i) {
                       return (
                           <Link to="/">
                               <img src={`${baseUrl}/post_paris_0${i + 2}.jpg`} alt="" />
                           </Link>
                       );
                   },
                   dots: true,
                   dotsClass: "slick-dots slick-thumb",
                   infinite: true,
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   autoplay: true,
                   autoplaySpeed: 1500,
                   cssEase: "linear",
               }
            },
            {
                blogTitle: 'بيروت الجميله ', id: 3, items: [
                    { id: 1, title: 'باريس الساحره ', image: baseUrl + '/post_paris_04.jpg' },
                    { id: 2, title: 'مصر العظيمه', image: baseUrl + '/post_paris_05.jpg' },
                    { id: 3, title: 'بيروت الجميله', image: baseUrl + '/post_paris_06.jpg' },
                ],
                settings : {
                   customPaging: function (i) {
                       return (
                           <Link to="/">
                               <img src={`${baseUrl}/post_paris_0${i + 4}.jpg`} alt="" />
                           </Link>
                       );
                   },
                   dots: true,
                   dotsClass: "slick-dots slick-thumb",
                   infinite: true,
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   autoplay: true,
                   autoplaySpeed: 1500,
                   cssEase: "linear",
               }
            }
        ],


    })
    // const settings = {
    //     customPaging: function (i) {
    //         return (
    //             <Link to="/">
    //                 <img src={`${baseUrl}/post_paris_0${i + 1}.jpg`} alt="" />
    //             </Link>
    //         );
    //     },
    //     dots: true,
    //     dotsClass: "slick-dots slick-thumb",
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     cssEase: "linear",
    // };
    return (
        <div>
            {itemState.blogList.map((item, i) =>
                <div key={i+'blog'} className="container" data-aos="fade-in">
                    <div className="blog-slider">

                        <Slider {...item.settings}>
                             {item.items.map((item,i) =>
                            <div key={i+'sub'} >
                                <img src={item.image} alt={item.title} />
                            </div>
                             )}
                             
                        </Slider>
                    </div>
                    <div className="blog-content">
                        <div className="blog-content-header">
                            <ul>
                                <li><i style={{ transform: 'rotate(90deg)' }} className="fas fa-tags"></i>  <Link to="/" >جولة</Link>  </li>
                                <li>  <Link to="/" >خصومات</Link> </li>
                                <li> <Link to="/" >عروض</Link> </li>
                            </ul>
                            <h4>
                                {item.blogTitle}
                </h4>
                            <ul>
                                <li><i className="far fa-clock"></i>  <Link to="/" >الثلاثاء, 11 أغسطس 2020</Link>  </li>
                                <li><i className="fas fa-user-circle"></i>  <Link to="/" >بواسطه ندى ايمن</Link> </li>
                                <li><i className="fas fa-comment"></i> <Link to="/" >1</Link> </li>
                            </ul>
                        </div>

                        <p>وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
                        العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت
                        ...وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه
                     ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...</p>



                        <div className="row">
                            <div className="col-md-4">
                                <div className="social">
                                    <i className="fab fa-facebook-f fb"></i>
                                    <i className="fab fa-twitter tw"></i>
                                    <i className="fab fa-youtube yt"></i>
                                    <i className="fas fa-basketball-ball dr"></i>
                                    <i className="fab fa-linkedin-in ln"></i>
                                </div>

                            </div>
                            <div className="col-md-12 text-left">
                                <Link to="/single-blog" className="btn btn--full">مواصلة القراءة</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

        </div>

    )
}
export default BlogView