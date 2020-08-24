import React from 'react';
const Subscribe = (props) => {
    return (
        <div className="subscribe">
            <div className="container" >
                <div className="subscribe-content">
                <h1>
                <span className="bt_bb_headline_superheadline">
                    <span className="btBreadCrumbs">
                        <span>  مرحبا بك فى ترفيليشيوس</span>
                    </span>
                </span>
                <span className="bt_bb_headline_content">
                    <span className="font-weight-normal">  تابعنا   <span className="underline_text">  و  استمتع  </span>
                    </span>
                </span>
                </h1>
                <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. </p>
                </div>

                <div className="subscribe-form">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                            <div className="col-9">
                            <input className="form-input" placeholder="اكتب بريدك الالكترونى" type="text" name="subscribe" />
                        </div>
                        <div className="col-3">
                        <button className="btn btn--full w-100">تابعنا</button>

                        </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}
export default Subscribe;