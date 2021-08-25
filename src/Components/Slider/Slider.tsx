import React from 'react';
import slides from './../../Static/Images/slider.jpg';
import {css} from "@emotion/css";

const __css_slider = (slides: any) => css `
    height: 250px;
    background-image: url(${slides});
    background-size: cover;
    background-position: center center;
`;

function Slider() {
    return (
        <React.Fragment>
           <div className={__css_slider(slides)}>

           </div>
        </React.Fragment>
    );
}

export default Slider;