import React from 'react';
import Button from 'react-bootstrap/Button';
import './index.css';
import foto from './image/foto.jpg';

export default class Jumbotronya extends React.Component {
    render() {
        return (
            <div className="p-2  text-white jumbotron" style={{ backgroundColor: '#010418' }}>
                <div className='container-fluid py-2 text-center'>
                    <p className='fs-5 fst-italic fst-bold mt-3'>Front-end web development</p>
                    <h1 className='display-4'>Rama Dhea Yudhistira</h1>
                    <img src={foto} alt="foto" className='rounded-circle' width='300' />

                    <br></br>
                    <Button className='btn btn-sm mt-5 shadow-sm px-3 py-2 text-white btnini' style={{ backgroundColor: '#340A8E' }} href="https://drive.google.com/file/d/1wKs8IFVfomCsHPcgTUwTVFN3qLHuI8uy/view?usp=sharing" target="_blank" >Download CV</Button>{' '}

                </div>



            </div>
        );
    }

}