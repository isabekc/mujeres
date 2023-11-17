import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';

function RedesSocias(){
    const iconStyle = {
        verticalAling:'middle',
    };

    return(
        <div className="redes-sociais">
           <a href="#">
            <FontAwesomeIcon icon={faFacebook} style={iconStyle}/>
           </a>
           <a href="#">
            <FontAwesomeIcon icon={faTwitter} style={iconStyle}/> 
           </a>
           <a href="#">
            <FontAwesomeIcon icon={faInstagram} style={iconStyle}/>
           </a>
        </div>
    )
}

export default RedesSocias;
