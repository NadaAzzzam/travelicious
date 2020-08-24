import React from 'react';

const OurTeam = () => {
    const baseUrl = 'https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09';

    let clientItem = [
        { image: '/people-0', animation:"fade-left" },
        { image: '/people-0', animation:"zoom-in" },
        { image: '/people-0', animation:"fade-right" },
        { image: '/people-0', animation:"fade-left" },
        { image: '/people-0', animation:"zoom-in" },
        { image: '/people-0', animation:"fade-right" },
    ];
    return (
        <div className="ourteam">
            <div className="container">
                <div className="row">
                    {
                        clientItem.map((item, i) =>
                            <div key={i} className="col-md-4" data-aos={item.animation}>
                                <div className="ourteam-card">
                                    <div className="ourteam-card-img">
                                    <div className="layer"></div>
                                        <img src={ `${baseUrl}${item.image}${i + 1}.jpg`} alt="" />
                                    </div>
                                    <div className="ourteam-card-content">
                                        <h3>ندى   <span className="text-underline">أيمن</span>  </h3>
                                        <p> هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر</p>
                                        <a href="#s" className="btn-text">
                                            اقراء المزيد<i className="fas fa-chevron-left"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}
export default OurTeam