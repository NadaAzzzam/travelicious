
  import React from 'react';
  const Preloader = (props) => {
      return (<div>
        {props.isShow}
        <div style={props.isShow ==="true"? {opacity :'1' } : {opacity:'0' , zIndex:'-223'}} className="loader-container">
            <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>  
          </div>
      </div>
          
        
      )
  }
     export default   Preloader