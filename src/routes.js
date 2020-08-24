
import Home from "./views/Home";
import Blog from "./views/Blog";
import AboutUs from "./views/AboutUs";
import Products from "./views/Products";
import ContactUs from "./views/ContactUs";
// import SingleBlog from "./views/SingleBlog";


const routes = [

  {
    to:'/home',
    label:'الرئيسيه',
    component: Home,
  },
  {
    to:'/about-us',
    label:'عنا',
    component: AboutUs,
  } , {
    to:'/products',
    label:'منتاجتنا',
    component: Products,
  },
  {
    to:'/blog',
    label:'المقالات',
    component: Blog,
  },
  {
    to:'/contact-us',
    label:'تواصل معانا',
    component: ContactUs,
  }
  // {
  //   to:'/single-blog',
  //   label:'Single Blog',
  //   component: SingleBlog,
  // },

]
export default routes;
