import React from "react";
import line from './image/line.png';
import cmin from './image/c-.png';
import hashtag from './image/hashtag.png';
import python from './image/python.png';
import java from './image/java.png';
import html5 from './image/html-5.png';
import css3 from './image/css-3.png';
import javascript from './image/java-script.png';
import figma from './image/figma.png';
import './index.css';

export default class Skill extends React.Component{
    render(){
        return(
            <div className="p-5  text-white aboutme" style={{ backgroundColor: '#212529' }}>
                <div className='container py-5 text-center'>
                    <div className='col-lg-12 col-md-12 col-sm-12 mt-5'>
                        <h3 className='fs-bold'>
                        My Skill
                        </h3>
                        <img src={line} alt="foto"  width='300' />

                        <div className="row justify-content-center skill-content mt-5">
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="logoskill">
                                    <img src={cmin} alt="foto" className='rounded-circle mx-5 pt-5 d-block' width='200' />
                                    
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="logoskill">
                                    <img src={hashtag} alt="foto" className='rounded-circle mx-5 pt-5 d-block' width='200' />
                                    
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="logoskill">
                                    <img src={python} alt="foto" className='rounded-circle mx-5 pt-5 d-block' width='200' />
                                    
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="logoskill">
                                    <img src={java} alt="foto" className='rounded-circle mx-5 pt-5 d-block' width='200' />
                                    
                                </div>

                            </div>


                            <div className="col-lg-3 col-md-4 col-sm-12 mb-5">
                                <div className="logoskill">
                                    <img src={html5} alt="foto" className='rounded-circle mx-5 pt-5 d-block' width='200' />
                                    
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-5">
                                <div className="logoskill">
                                    <img src={css3} alt="foto" className='rounded-circle mx-5 pt-5 d-block' width='200' />
                                    
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-5">
                                <div className="logoskill">
                                    <img src={javascript} alt="foto" className='rounded-circle mx-5 pt-5 d-block' width='200' />
                                    
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 mb-5">
                                <div className="logoskill">
                                    <img src={figma} alt="foto" className='rounded-circle mx-5 pt-5 d-block' width='200' />
                                    
                                </div>

                            </div>

                        </div>
                       
                        
                        
                    </div>

                </div>
                
            </div>
            
        )
    }
}