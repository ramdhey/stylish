import React from "react";
import './index.css';


export default class Footer extends React.Component{
    render(){
        return(
            <div className="foot ">
                <div className="footerini">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white " style={{ backgroundImage: 'linear-gradient(to right,#27AB12, #010418, #290380,#33035a)' }}>
                        <div className="container-fluid">
                            <h3 className="footer text-light me-auto ms-auto">
                            &copy; 2022 Rama Dhea Yudhistira

                            </h3>

                        </div>
                    </nav>

                </div>

            </div>
            
        )
    }
}