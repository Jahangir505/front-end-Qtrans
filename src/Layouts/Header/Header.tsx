import React from 'react';
import {css} from "@emotion/css";
import Logo from "./../../Static/Images/logo.png";
import MenuIcon from '@material-ui/icons/Menu';

const __css_header = css `
    width: 100%;
    background: #EBEBEB;
    height: 70px;
    
    table tr td:nth-child(1){
        width: 120px;
    } 
    
    table tr td:nth-child(3){
        width: 120px;
    }
    
    .table{
        position: absolute;
        width: 100%;
      
        
        
        .left-side{
            padding-left: 20px;
            display:flex;
            align-items: center;
            
            svg{
                background: white;
                padding: 6px 2px;
                border-radius: 8px;
                margin-left: 5px;
            }
            
            
            h3{
                font-size: 18px;
                font-weight: 500;
                color: #8C8D8E;
            }
            
        } 
        
        .middle{
            
            padding: 0;
               ul {
                    margin: 0;
                    li{
                        margin: 0;
                        float: left;
                        list-style: none;
                        padding-right: 15px;
                     }
                } 
               }  
        
        .right-side{
        
        padding-right: 20px;
            img{
                width: 100px;
            }
        }  
    }
    
    

`;

function Header() {
    return (
        <React.Fragment>
            <div className={__css_header}>
                <table className={"table"}>
                    <tr>
                        <td>
                            <div className={"left-side"}>
                                <h3>TransnPack</h3>
                                <MenuIcon/>
                            </div>

                        </td>
                        <td>
                            <div className={"middle"}>
                                <ul>
                                    <li>Dashboard</li>
                                    <li>Packages</li>
                                    <li>Reports</li>
                                </ul>
                            </div>

                        </td>
                        <td>
                            <div className={"right-side"}>
                                <img src={Logo} alt=""/>
                            </div>

                        </td>
                    </tr>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Header;