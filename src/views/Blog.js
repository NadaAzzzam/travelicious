import React,{useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import BlogView from '../components/Blog/Blog';
import { useLocation } from 'react-use';

const Blog = () => {
    const title ='  المقالات    '
    const { pathname } = useLocation();

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);

    }, [pathname]);
    return(
        <div className="blog">            
            <BreadCrumb name={title}/>
            <BlogView/>

            
        </div>
    );
}
export default Blog;