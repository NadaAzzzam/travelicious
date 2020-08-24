import React from 'react';
import Map from '../../assets/images/google map .png'

const ContactForm = (props) => {

    return (
        <div className="contactus-form">
            <div className="container">
                <div data-aos="fade-in" className="row"
                    initial={{ opacity:0}}
                    animate={{ opacity: props.scrollDown ? 0:1 }}
                    transition={{ delay: .4, duration: .6}}
                >
                    <div className="col-md-6">

                        <div className="heading-secondary">
                            <h2><span className="bt_bb_headline_superheadline">
                                <span className="btBreadCrumbs">
                                    <span> اتصل بنا بكل سهولة </span>
                                </span>
                            </span>
                                <span className="bt_bb_headline_content">
                                    <span className="font-weight-normal"> ابقي على  <span className="underline_text">    اتصال </span>
                                    </span>
                                </span>
                            </h2>
                            <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. </p>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contactus-card">
                                    <i className="fas fa-map-marked-alt"></i><h5 ><strong>العنوان</strong></h5>
                                    <p>العروبة، المنتزه،
                                قسم مصر الجديدة، محافظة القاهرة‬</p>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="contactus-card">
                                    <i className="fas fa-mobile-alt"></i><h5 >  <strong>اتصل بنا</strong></h5>
                                    <p>443-997-6896
                                    <br />
                                443-997-6896

                            </p>
                                </div>
                            </div>
                            <div className="col-md-4"><div className="contactus-card">
                                <i className="far fa-newspaper"></i> <h5 ><strong>اكتب لنا</strong></h5>
                                <p>office@travelicious.com
                                <br />
                                office@travelicious.com

                            </p>
                            </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <img className="img-fluid" src={Map} alt="" />
                    </div>
                    <div className="col-md-6 text-right">
                        <div className="form-group">
                            <label >الاسم <span className="primary-color">*</span></label>
                            <input type="text" className="form-input form-input-border " />
                        </div>

                        <div className="form-group">
                            <label >البريد الالكترونى <span className="primary-color">*</span></label>
                            <input type="text" className="form-input form-input-border " />

                        </div>

                        <div className="form-group">
                            <label >الموضوع </label>
                            <input type="text" className="form-input form-input-border " />

                        </div>

                        <div className="form-group">
                            <label >رسالتك </label>
                            <textarea className="form-input form-input-border " rows="6"></textarea>
                        </div>
                        <button className="btn btn--full">ارسل رسالتك</button>
                    </div>

                </div>
            </div >
        </div >
    );
}
export default ContactForm;