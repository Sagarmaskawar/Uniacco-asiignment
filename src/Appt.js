import React from 'react'
import './Mobile.css'
const Appt = () => {
  return (
    <div className='Appt'>
            <header>
            <span className='micon'><i class="fa-solid fa-magnifying-glass"></i></span><input placeholder='Where are you going'/>
            </header>
            <div className='mbox'>
                <h5 className='mh5'>
                Help house 100,000 refugees fleeing Ukraine
                </h5>
                <div className='mlearn'>
                 Learn More
                </div>
            </div>
        <div className='mimage'>
        <h4 className='mh4'>Let your curiosity do the booking</h4>
        <div className='mfl'>
            <div className='minner'>
              I'm flexible
            </div>
            
        </div>
        </div>

        <div className='mcards' >
     <h3>Inspiration for your next trip</h3>

     <div className='mcardsflex'>
         <div style={{backgroundColor:"#DC143c"}}>
            
         <img src={require('../src/components/images/lonavla.jpg')}/>
            <h6>Lonavla </h6>
           <p> 55Kilometers away</p>
         </div>
         <div style={{backgroundColor:"#7FFFD4"}}>
           <img src={require('../src/components/images/calingude.jpg')}/>
             <h6>Calangute</h6>
            <p> 333Kilometers away</p>
         </div>
         <div style={{backgroundColor:"#8B008B"}}>
         <img src={require('../src/components/images/panchghai.jpg')}/>
            <h6> Panchgani</h6>
            <p> 68Kilometers away</p>
         </div>
         <div style={{backgroundColor:"#FF4500"}}>
         <img src={require('../src/components/images/alibagh.png')}/>
            <h6>Alibagh</h6> 
            <p> 106kilometers away</p>
         </div>
         <div style={{backgroundColor:"#CD5c5c"}}>
         <img src={require('../src/components/images/goa.jpg')}/>
            <h6>Goa </h6>
            <p>400Kilometers away</p>
         </div>
         <div style={{backgroundColor:"#FF1493"}}>
         <img src={require('../src/components/images/agra.jpg')}/>
            <h6>Agra</h6> 
            <p> 400Kilometers away</p>
         </div>
     </div>

    </div>
    <div className='mdisc'>
    <h5 className='mdichead'>Discover Airbnb Experiences</h5>
     <div className='mdis'>
         <div className='discone'>
         <h4 className='mh4'>
         Things to do
          on your trip
         </h4>
          <div className='expe'>  Experiences</div>
         </div>
         <div className='disctwo'>
         <h4 className='h44'>Things to do from home</h4>
                <div className='expe'>Online Experiences</div>
                        </div>
                    </div>

                    </div>
                    <div className='mhosting'>
                
                <h1 className='mh1'>
                    Questions about hositng?
                </h1>
                <div className='msuperhost'>
                    Ask a Superhost
                </div>
                    </div>
                
                    <div className='footer'>
      <div className='mfpart'>
      <div className='ffpart'>
              <h4>Support</h4>
             <ul className='ull'>
            <li> Help Centre</li>
             <li>Safety Information</li> 
             <li> Cancellation options</li>
            <li> Our COVID-19 Response</li>
            <li> Supporting people with disabilities</li> 
             <li>Report a neighbourhood concern</li> 
             </ul>
    </div>
          <div className='ffpart'>
          <h4>Community</h4>
          <ul className='ull'>
          <li>Airbnb.org: disaster relief housing</li>
              <li>Support Afghan refugees</li>
              <li>Combating discrimination</li>
          </ul>
             
             
          </div>
          <div className='ffpart'>
          <h4>Hosting</h4>
          <ul className='ull'>
          <li>Try hosting</li>
              <li>AirCover: protection for Hosts</li>
              <li>Explore hosting resources</li>
              <li>Visit our community forum</li>
              <li>How to host responsibly</li>
          </ul>
              
             
          </div>
          <div className='ffpart'>
          <h4>About</h4>
          <ul className='ull'>
          <li>Newsroom</li>
              <li>Learn about new features</li>
              <li>Letter from our founders</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb Luxe</li>
          </ul>
            
              
          </div>
      </div>
      <div className='mlinee'></div>
       <div className='mspart'>
       <div  className='mflast'>
           <i class="fa-solid fa-globe"></i>
           <h4 className='name'>English(IN)</h4>
           <h4 className='name'>₹ INR</h4>
          
           </div>
           <div className='foo'>
               <h6>© 2022 Airbnb, Inc.</h6>
               <ul>
                   <li>Privacy</li>
                   <li>Terms</li>
                   <li>Sitemap</li>
                   <li>Company details</li>
               </ul>
           </div>
           
       </div>
    </div>
    </div>
  )
}

export default Appt