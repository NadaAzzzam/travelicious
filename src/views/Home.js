import React ,{useEffect }from 'react';
import Hero from '../components/Home/Hero';
import VisionMission from '../components/Home/VisionMission';
import ProductsSlider from '../components/Home/ProductsSlider';
import Subscribe from '../components/Subscribe/Subscribe';
import ClientSlider from '../components/Home/ClientSlider';
import ContactUSMap from '../components/Home/ContactUs';
import { useLocation } from 'react-use';
// let ReactDom = require('react-dom');
const Home = (props) => {
       const title ='  الرئيسيه    ';
       const { pathname } = useLocation();

      useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);

      }, [pathname]);

    return(
        <div>
            <Hero/>
            <VisionMission scrollDown={props.scrollDown}/>
            <hr/>
            <ProductsSlider scrollDown={props.scrollDown}/>
            <Subscribe scrollDown={props.scrollDown}/>
            <ClientSlider scrollDown={props.scrollDown}/>
            {/* <ContactUSMap  scrollDown={props.scrollDown}/>  */}


        </div>
    );
}
export default Home;