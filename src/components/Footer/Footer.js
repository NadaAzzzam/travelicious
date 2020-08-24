import React from 'react';
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <div className="section-footer">
            <div className="container">
                <hr />
                <div className="py-5">
                    <div className={props.widthPos <=755? "row reverse-div":"row"}>
                        <div className="col-md-5 ">
                            <div className="footer-info">
                                {/* <img src="https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/08/Travelicious-logo.png" alt="" /> */}
                                <img src="https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/08/Travelicious-logo-footer.png" alt="" />
                                <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. </p>
                                <div className="socail-icon">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-google"></i>
                                    <i className="fab fa-pinterest-p"></i>
                                    <i className="fab fa-youtube"></i>
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-links">
                                <h5><strong>الروابط</strong></h5>
                                <ul>
                                    {
                                        props.routes.map((prop, key) => {

                                            return (

                                                <li className={prop.label === 'Single Blog' ? 'd-none' : ''} key={key}>
                                                    {/* <Link style={ prop.to =='/home' ? { activeLine:'scaleX(0)', activeShadow:'1'} : {}} to={prop.to}>{prop.label} </Link> */}
                                                    <Link className="active" to={prop.to}>{prop.label} </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-subscribe">
                                <p>هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما</p>
                                <div className="input-group mb-3" >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="far fa-paper-plane"></i></span>
                                    </div>
                                    <input style={{ border: '1px solid #ced4da',  height: '3rem' }} type="text" className="form-control form-input" placeholder="اكتب بريدك الالكترونى" aria-label="Username" aria-describedby="basic-addon1" />

                                    <button className="btn btn--full">تابعنا</button>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
}
export default Footer;