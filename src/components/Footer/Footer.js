/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import EmailForm from '../email/email.js';
import { loggerContext } from '../auth/context.js';


function Footer(){
  let useLogger = useContext(loggerContext);

  if(!useLogger.logState){

    return(
      <>
        <footer >
          <div className='sloganFooter'>
            <div className='topLine' data-aos='fade-right'></div>
            <div className='appNameFooter' data-aos='fade-right'>
              {/* eslint-disable-next-line */}
              <a href="#" className="brand-logo">
                <img className='logo' src={require('./steering-wheel.svg')} alt='logo'></img>
                <div className='appName'>Wheel Me Up</div>
              </a>
            </div>
            <div className='greenUnderLine' data-aos='fade-right'></div>
            <div className='slogan' data-aos='fade-right'>Closer to the people,</div>
            <div className='slogan' data-aos='fade-right'>from the people,</div>
            <div className='slogan' data-aos='fade-right'>to the people.</div>
            <div className='slogan' data-aos='fade-right'>No Corporations.</div>
          </div>
    
          <div className='mainFooter'>
            <div className='footerName' data-aos='fade-up'> Wheel Me Up</div>
            <div className='footerLogos' >
              <a href='https://twitter.com/ahmadkh01499914'> <img className='twitter' src={require('./twitter.svg')} alt='twitter logo' data-aos='fade-right' /></a>
              <a href='https://www.facebook.com/ahmadkhaleel96'><img className='facebook' src={require('./facebook.svg')} alt='facebook logo' data-aos='fade-up'/></a> 
              <a href='https://www.instagram.com/ahmadkhaleel96'><img className='instagram' src={require('./instagram.svg')} alt='instagram logo' data-aos='fade-left'/></a>
            </div>
            <div className='footerLine'></div>
            <div className='reportForm'>Any Issues?
            </div>
            <EmailForm />


            <div className='copyRights'>&copy; 2020 | Mile Adders</div>
          </div>

          <div className='footerNav'>
            <div className='topLineLeft' data-aos='fade-left'></div>
            <div data-aos='fade-left'><a href='/AskUs'>Ask Us</a></div>
            <div className='bottomLine' data-aos='fade-right' ></div>
            <div><a href='/login' data-aos='fade-left'>Log In</a></div>
            <div className='bottomLine' data-aos='fade-right'></div>
            <div><a href='SignUp' data-aos='fade-left'>Sign Up</a></div>
            <div className='bottomLine' data-aos='fade-right'></div>
          </div>

        </footer>
      </>
    ); 
  } else {

    return(
      <>
        <footer >
          <div className='sloganFooter'>
  
            <div className='topLine' data-aos='fade-right'></div>
            <div className='appNameFooter' data-aos='fade-right'>
              {/* eslint-disable-next-line */}
              <a href="#" className="brand-logo">
                <img className='logo' src={require('./steering-wheel.svg')} alt='logo'></img>
                <div className='appName'>Wheel Me Up</div>
              </a>
            </div>
            <div className='greenUnderLine' data-aos='fade-right'></div>
            <div className='slogan' data-aos='fade-right'>Closer to the people,</div>
            <div className='slogan' data-aos='fade-right'>from the people,</div>
            <div className='slogan' data-aos='fade-right'>to the people.</div>
            <div className='slogan' data-aos='fade-right'>No Corporations.</div>
          </div>
      
          <div className='mainFooter'>
            <div className='footerName' data-aos='fade-up'> Wheel Me Up</div>
            <div className='footerLogos' >
              <a href='https://twitter.com/ahmadkh01499914'> <img className='twitter' src={require('./twitter.svg')} alt='twitter logo' data-aos='fade-right' /></a>
              <a href='https://www.facebook.com/ahmadkhaleel96'><img className='facebook' src={require('./facebook.svg')} alt='facebook logo' data-aos='fade-up'/></a> 
              <a href='https://www.instagram.com/ahmadkhaleel96'><img className='instagram' src={require('./instagram.svg')} alt='instagram logo' data-aos='fade-left'/></a>
            </div>
            <div className='footerLine'></div>
            <div className='reportForm'>Any Issues?
            </div>
            <EmailForm />
  
  
            <div className='copyRights'>&copy; 2020 | Mile Adders</div>
          </div>
  
          <div className='footerNav'>
            <div className='topLineLeft' data-aos='fade-left'></div>

            <div data-aos='fade-left'><a href='bookingForm'>Book a Car</a></div>
            <div className='bottomLine' data-aos='fade-right' ></div>

            <div><a href='carRent' data-aos='fade-left'>Rent your Car</a></div>
            <div className='bottomLine' data-aos='fade-right'></div>
            
            <div><a href='askUs' data-aos='fade-left'>Ask Us</a></div>
            <div className='bottomLine' data-aos='fade-right'></div>

            <div><a href='contactUs' data-aos='fade-left'>Contact Us</a></div>
            <div className='bottomLine' data-aos='fade-right'></div>

          </div>
  
        </footer>
      </>
    ); 

  }
}

export default Footer;