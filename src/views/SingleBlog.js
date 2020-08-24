import React, { useEffect, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import { useLocation } from "react-router-dom";
const SingleBlog = (props) => {
    const title = '  باريس الرائعه    '
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);

    }, [pathname]);

    const [dataState, setDataState] = useState({
        showModal: false,
        imgModal: null

    })
    const openModal = (img) => {
        setDataState({
            showModal: true,
            imgModal: img
        })
    }
    const baseUrl = 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/08';

    let blogItems = [
        { image: baseUrl + '/post_paris_01.jpg' },
        { image: baseUrl + '/post_paris_02.jpg' },
        { image: baseUrl + '/post_paris_03.jpg' },
        { image: baseUrl + '/post_paris_04.jpg' },
        { image: baseUrl + '/post_paris_05.jpg' },
        { image: baseUrl + '/post_paris_06.jpg' },
    ]
    return (
        <div className="single-blog">
            <BreadCrumb name={title} />
            {/* The Modal  */}
            <div style={dataState.showModal === true ? { display: 'block' } : {}} className="modal">
                <span onClick={() => { setDataState({ showModal: false }) }} className="close">&times;</span>
                <img className="modal-content" src={dataState.imgModal} alt="" />
                <div id="caption"></div>
            </div>
            <div className="single-blog-content" data-aos="fade-in" >
                <div className="container">
                    <div className="row">
                        {
                            blogItems.map((item, i) =>
                                <div key={i} className="col-md-4">
                                    <div className="single-blog-card">
                                        <div onClick={() => { openModal(item.image) }} className="single-blog-sm-img ">
                                            <span className="products-icon"><i className="fas fa-search"></i></span>
                                            <img src={item.image} alt="" />
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        <div className="col-md-12 text-right">
                            <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. </p>
                            <h3><strong>لماذا تختار هذا المكان</strong></h3>
                            <p>هنالك العديد من    ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.هنالك العديد.هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. </p>
                            <blockquote>
                                <p><i className="fas fa-quote-right"></i>
                            هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
                            <cite>ندى ايمن</cite>
                                </p>
                            </blockquote>
                            <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. </p>
                            <img src={baseUrl + '/post_paris_01.jpg'} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SingleBlog;