import React from 'react';
import Experience from './Bootstrap/Experience';
import Footer from './Bootstrap/Footer';
import Navbarnnya from './Bootstrap/indexboot';
import Isinya from './Bootstrap/Isinya';
import Jumbotronya from './Bootstrap/Jumbotronya';
import Skill from './Bootstrap/Skill';


export default class Styling extends React.Component {
  render() {
    return (
        <div>
            <Navbarnnya/>
            
            <Jumbotronya/> 

            <Isinya/>

            <Experience/>      

            <Skill/>

            <Footer/>
        </div>    )
  }
}