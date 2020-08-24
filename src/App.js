import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import routes from './routes'
import Footer from './components/Footer/Footer';
import SingleBlog from './views/SingleBlog';
import AOS from 'aos';
import Preloader from './components/Preloader/Preloader';

// import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  const [lastYPos, setLastYPos] = useState(window.innerWidth);
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);
  const [shouldShowActions, setShouldShowActions] = useState(false);
  useEffect(() => {


    AOS.init();

    AOS.init({
        // Global settings:
        startEvent: 'someCoolEvent',
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'linear', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    AOS.refresh();


    function handleScroll(e) {
      const yPos = window.scrollY;
      const widthPos =window.innerWidth;
      const isScrollingDown = yPos >lastYPos;
      setinnerWidth(widthPos)
      setShouldShowActions(isScrollingDown);
      setLastYPos(yPos);
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.addEventListener("scroll", handleScroll, false);
    }
  }, [lastYPos,innerWidth])



  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.to}
          render={() => (
            <prop.component
            scrollDown={shouldShowActions}
              {...prop}
            />
          )}
          key={key}
        />
      );
    });
  };



  const [loadingState, setloadingState] = useState({
    isLoading: null,
    isLoadingShow: "true"
})
useEffect(() => {
    const timer = setTimeout(() => {
        setloadingState({ isLoadingShow: "false" })
    }, 1500);
    return () => clearTimeout(timer);
}, []);


  return (
    <div className="btPageWrap">
      {/* PRELOADER */}

      <Preloader isShow={loadingState.isLoadingShow} />
      {/* HEADER */}

        <Header widthPos={innerWidth} routes={routes} />

      {/* MY COMPONENT */}
      <div className="mt-5 pt-5">
        
        <Switch >
          {/* <Route path="/page-notfound" component = {PageNotFound}/> */}
          <Redirect exact from="/" to="/home" />

          {getRoutes(routes)}
           
          <Route scrollDown={shouldShowActions}  path='/single-blog' component={SingleBlog} />
        </Switch>
        {/* <Redirect  to="/page-notfound" /> */}
      </div>




      <Footer widthPos={innerWidth} scrollDown={shouldShowActions} routes={routes} />
    </div>


  );
}

export default App;
