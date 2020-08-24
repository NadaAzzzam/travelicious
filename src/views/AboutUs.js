import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import OurMission from '../components/About/OurMission'
import Slider from '../components/About/Slider';
import OurTeam from '../components/About/OurTeam';
import Subscribe from '../components/Subscribe/Subscribe';
import { useLocation } from 'react-use';

const AboutUs = (props) => {
    const title = '  عنا    '
    const { pathname } = useLocation();

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);

    }, [pathname]);
    return (
        <div>
            <BreadCrumb name={title} />
            <div data-aos="fade-in">

                 <OurMission titleFirst={"رؤيتنا و"} titleSecond={"طموحاتنا"} />
            <Slider />
            <OurMission titleFirst={"اهدافنا و"} titleSecond={"احلامنا"} />
            <OurTeam />
            <Subscribe />    
            </div>
           
        </div>
    );
}
export default AboutUs;