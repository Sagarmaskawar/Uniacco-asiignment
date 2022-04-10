import React from 'react'
import './cards.css';
const Cards = () => {
  return (
    <div className='cards' >
     <h3>Inspiration for your next trip</h3>

     <div className='cardsflex'>
         <div style={{backgroundColor:"#DC143c"}}>
            
         <img src={require('../images/lonavla.jpg')}/>
            <h6>Lonavla </h6>
           <p> 55Kilometers away</p>
         </div>
         <div style={{backgroundColor:"#7FFFD4"}}>
           <img src={require('../images/calingude.jpg')}/>
             <h6>Calangute</h6>
            <p> 333Kilometers away</p>
         </div>
         <div style={{backgroundColor:"#8B008B"}}>
         <img src={require('../images/panchghai.jpg')}/>
            <h6> Panchgani</h6>
            <p> 68Kilometers away</p>
         </div>
         <div style={{backgroundColor:"#FF4500"}}>
         <img src={require('../images/alibagh.png')}/>
            <h6>Alibagh</h6> 
            <p> 106kilometers away</p>
         </div>
         <div style={{backgroundColor:"#CD5c5c"}}>
         <img src={require('../images/goa.jpg')}/>
            <h6>Goa </h6>
            <p>400Kilometers away</p>
         </div>
         <div style={{backgroundColor:"#FF1493"}}>
         <img src={require('../images/agra.jpg')}/>
            <h6>Agra</h6> 
            <p> 400Kilometers away</p>
         </div>
     </div>

    </div>
  )
}

export default Cards