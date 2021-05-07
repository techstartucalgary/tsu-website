import React from 'react';
import dividerIMG from 'images/divider.svg';
import './Divider.css';
function Divider(){
    return <div className="divider"><img src={dividerIMG} alt="gradient divider" className="divider__gradient"/></div>
}

export default Divider;