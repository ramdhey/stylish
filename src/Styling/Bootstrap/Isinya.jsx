import React from 'react';
import './index.css';
import line from './image/line.png';

export default class Isinya extends React.Component{
    render(){
        return(
            <div className="p-5  text-white aboutme" style={{ backgroundColor: '#212529' }}>
                <div className='container py-5 text-center'>
                    <div className='col-lg-12 col-md-12 col-sm-12 mt-5'>
                        <h3 className='fs-bold'>
                        About Me
                        </h3>
                        <img src={line} alt="foto"  width='300' />
                        
                        <p className='pt-5 fs-5 fst-italic fw-light'>
                        Saya seorang mahasiswa Teknik Informatika di Universitas Pamulang. 
                        Saya memiliki keinginan dan ambisi besar untuk mempelajari dan berkembang dalam dunia Software  Engineer,
                        terutama dalam bidang Web Developer,Mobile Developer,Software ERP, dan Cyber Security.

                        </p>
                    </div>

                </div>
                
            </div>
            
        )
    }
}