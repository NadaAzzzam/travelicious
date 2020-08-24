import React from 'react';
// import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
    return (
        <div className="breadcrumb-section">
            <div className="container">
                <div className="breadcrumb-content">
                    <div className="heading-primary">
                        <h1>
                            {/* <span className="bt_bb_headline_superheadline">
                                <span className="btBreadCrumbs">
                                    <span><Link to="/">الرئيسيه</Link></span>
                                    <span><Link to="/about-us">عنا</Link></span>
                                </span>
                            </span> */}
                            <span className="bt_bb_headline_content"><span>{props.name}</span></span>
                        </h1>
                        <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default BreadCrumb;