import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/Travelicious-logo.png';
import { Link } from "react-router-dom";
// import { useLocation } from 'react-router-dom'

const Header = (props) => {
   // let location = useLocation();
   const [innerWidth, setinnerWidth] = useState(window.innerWidth);

   useEffect(() => {

      function handleScroll(e) {
         const widthPos = window.innerWidth;
         setinnerWidth(widthPos)

      };
      window.addEventListener("resize", handleScroll, false);
      return () => {
         window.addEventListener("resize", handleScroll, false);
      }
   });

   const [showNavToggState, SetshowNavToggState] = useState({
      show: false,
      isCurrentPath: '/home',
      screenWidth: window.innerWidth
   })
   const toggleNav = () => {
      if (innerWidth <= 1024) {
         const doesShow = showNavToggState.show;
         SetshowNavToggState({ show: !doesShow })
      }

   }
   // console.log( toggleNav);

   // const activeRouter =()=>{
   //    console.log(location.pathname)
   //    const isCurrentPath =props.routes.find(el=> el.to===location.pathname)
   //    SetshowNavToggState({isCurrentPath:isCurrentPath.to}) 
   // }
   return (
      <div className="clearfix">
         <nav className="navbar navbar-expand-lg fixed-top bg-white">
            {/* <button onClick={activeRouter}>{showNavToggState.isCurrentPath}</button> */}
            <div className="container">
               <Link to="/" className="navbar-brand">
                  <img className=' logo' style={showNavToggState.show ? { opacity: '0' } : {}} src={logo} alt="Kion logo" />
               </Link>
               <ul style={showNavToggState.show ? { left: '0' } : {}} className="main-nav js--main-nav">
                  <img src='https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/08/Travelicious-logo.png' alt="Kion logo" className="mobile-logo" />
                  <div>
                     {
                        props.routes.map((prop, key) => {

                           return (
                              <li onClick={toggleNav} className={prop.label === 'Single Blog' ? 'd-none invisible' : ''} key={key}>
                                 {/* <Link style={ prop.to =='/home' ? { activeLine:'scaleX(0)', activeShadow:'1'} : {}} to={prop.to}>{prop.label} </Link> */}
                                 <Link className="active" to={prop.to}>{prop.label} </Link>
                              </li>
                           )
                        })
                     }
                  </div>
               </ul>

               <span className={showNavToggState.show ? ' active navTrigger' : 'navTrigger'} onClick={toggleNav}>
                  <i></i>
                  <i></i>
                  <i></i>
               </span>
            </div>

         </nav>
      </div>

   );
}

export default Header;