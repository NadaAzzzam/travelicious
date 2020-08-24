import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {

    const scrollToVision =() =>{
        window.scrollTo(300, 910);

    }

    return (
        <div className="hero-section" >
            <div className="container">

                <div className="hero-text-box">
                    <div data-aos="fade-up"  data-aos-delay="1600">
                        <div className="heading-primary" >
                            <h1>
                                <span className="bt_bb_headline_superheadline">
                                    <span className="btBreadCrumbs">
                                        <span>  مرحبا بك فى ترفيليشيوس</span>
                                    </span>
                                </span>
                                <span className="bt_bb_headline_content"><span>نص لوريم إيبسوم القياسي</span></span>
                            </h1>
                            <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. </p>
                        </div>
                        <div>
                           <button onClick={scrollToVision} className="btn btn--ghost">رؤيه المزيد</button>
                        <Link to="/contact-us" className="btn btn--full ">تواصل معانا</Link> 
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Hero;