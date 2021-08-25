import React, {Component} from 'react';
import {css} from "@emotion/css";
import Header from "../../Layouts/Header/Header";
import Slider from "../../Components/Slider/Slider";
import Footer from "../../Layouts/Footer/Footer";
import FormPart from "../../Components/Form/FormPart";


const __css_home_page = css `
    width: 100%;
    height: 100%;
    background: #EBEBEB;
    margin: 0;
    padding: 0;

`
class Home extends Component<any, any> {
    render() {
        return (
            <React.Fragment>
               <div className={__css_home_page}>
                   <Header/>
                   <Slider/>
                   <FormPart/>
                   {/*<Footer/>*/}
               </div>
            </React.Fragment>
        );
    }
}

export default Home;