import React from "react";
import './index.css';
import line from './image/line.png';
import ux from './image/ux.svg';
import gamedev from './image/game-development.svg';
import website from './image/website.svg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default class Experience extends React.Component{
    render(){
        return(
            <div className="p-5  text-white aboutme" style={{ backgroundColor: '#212529' }}>
                <div className='container py-5 text-center'>
                    <div className='col-lg-12 col-md-12 col-sm-12 mt-5'>
                        <h3 className='fs-bold'>
                        My Experience
                        </h3>
                        <img src={line} alt="foto"  width='300' />
                        <div className="row justify-content-center skill-content mt-5 ">

<CardGroup className="cardnya">
      <Card >
        <Card.Img src={website} width={100} height={120} className="cardnya" />
        <Card.Body className="cardnya" >
          <Card.Title className="cardnya">MERN Web Developer di Eduwork</Card.Title>
          <Card.Text className="cardnya">
          Saya mengikuti program bootcamp dan penyaluran kerja selama 3 bulan secara daring,dalam bootcamp ini saya mendapat banyak ilmu dan pengalaman baru di dunia Web developer dan juga industrinya.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img  src={ux} width={100} height={120} className="cardnya"/>
        <Card.Body className="cardnya">
          <Card.Title className="cardnya">Odoo Python Programmer di PT. Hashmicro Solusi Indonesia</Card.Title>
          <Card.Text className="cardnya">
          Saya mengikuti kegiatan magang Kampus Merdeka selama 5 bulan di PT. Hashmicro Solusi Indonesia, selama magang saya ditugaskan untuk membantu project ERP dari Salah satu perusahaan kabel di Jabodetabek.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card >
        <Card.Img src={gamedev} width={100} height={120} className="cardnya" />
        <Card.Body className="cardnya">
          <Card.Title className="cardnya">Game Programmer di Agate International</Card.Title>
          <Card.Text className="cardnya">
          Di Agate saya mengikuti bootcamp pembuatan game selama 6 bulan secara daring, dalam pembuatan game saya berperan sebagai perogrammer game dengan menggunakan tools unity sebagai engine dan bahasa pemrograman C# sebagai bahasa pemrograman.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>

                        </div>
                    
                    </div>

                </div>

            </div>
            
        )
    }

}