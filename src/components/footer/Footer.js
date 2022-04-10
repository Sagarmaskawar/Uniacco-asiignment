import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='fpart'>
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
      <div className='linee'></div>
       <div className='spart'>
           <div className='foo'>
               <h6>© 2022 Airbnb, Inc.</h6>
               <ul>
                   <li>Privacy</li>
                   <li>Terms</li>
                   <li>Sitemap</li>
                   <li>Company details</li>
               </ul>
           </div>
           <div  className='flast'>
           <i class="fa-solid fa-globe"></i>
           <h4 className='name'>English(IN)</h4>
           <h4 className='name'>₹ INR</h4>
           <div className='fooo'>
                    <div className='icons'>
                    <i class="fa-brands fa-facebook" ></i>
                    </div>
                   <div className='icons'> <i class="fa-brands fa-twitter-square" ></i></div>
                   <div className='icons'> <i class="fa-brands fa-instagram-square" ></i></div>
           </div>
           </div>
       </div>
    </div>
  )
}

export default Footer