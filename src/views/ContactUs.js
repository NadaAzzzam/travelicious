import React, { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import ContactForm from '../components/ContactUs/ContactForm';
import { useLocation } from 'react-use';

const ContactUs = () => {
    const title = '  تواصل معانا    '
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);

    }, [pathname]);
    return (
        <div className="contactus">            
            <BreadCrumb name={title} />
            <ContactForm/>
        </div>
    );
}
export default ContactUs;