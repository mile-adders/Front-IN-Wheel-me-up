/* eslint-disable no-unused-vars */
import React from 'react';
import { Component } from 'react';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class Cards extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='contactUs' data-aos='fade-up'>
          <div className='ContactUsDiv' data-aos='fade-up'>
            <div className='everything' data-aos='fade-up'>
              <h2 class='whoWeAre' data-aos='fade-up'>Who are you?</h2>
              <div className='underLineCU' data-aos='fade-up'></div>
              <h2 class='whoWeAre' data-aos='fade-up'>We Are The Mile Adders</h2>
              <div className='underLineCU1' data-aos='fade-up'></div>
              <p class='description' data-aos='fade-up'>
              Mile Adders, is the name of a team that consists of 4 , unique individuals from Jordan, with different majors, different personalities, and different backstories, but all of us share one thing only and that is we earned ourselves a once in a lifetime opportunity, the opportunity of changing the course of our lives forever, all of us earned a scholarship to take the best, immersive, and intensive Full-stack JavaScript Software Development Boot camp, in the world, provided by Code Fellows, and taught at Luminus Technical University College, in Jordan. Only 6 months ago, all of us had zero experience in Coding, now what you see is the result of 6 months of not sleeping, crying, hair pulling, weight gaining, and social distancing. We started not knowing anything about coding, to building a Full-Stack web Application, literally everything is built from scratch and this is the best honor. Wheel Me Up is the manifestation of 4 different inexperienced minds, and lots and lots of fighting.  
              </p>
              <div className='underLineCU2' data-aos='fade-up'></div>
            </div>
            <h2 className='meet' data-aos='fade-up'>Meet The Mile Adders</h2>
            <div className='underLineCU3' data-aos='fade-up'></div>

            <div className='team'>
              <div className='members'>

                <div className='card' data-aos='fade-right'>
                  <img className='portrait' src={require('./assets/ahmad.png')} alt='mile adder'/>
                  <div className='name' data-aos='fade-right'>Ahmad K. Al-Mahasneh</div>
                  <div className='cardUnderLine' data-aos='fade-right'></div>
                  <div className='background' data-aos='fade-right'>Former Electrical Power Engineer.</div>
                  <div className='background' data-aos='fade-right'>Now a Mile Adder.</div>
                  <div className='icons'>
                    <a href='https://github.com/ahmadkhaleel96'> <img data-aos='fade-right' className='icon' src={require('./assets/github.svg')} alt='github'/> </a>
                    <a href='ahmadltuc96@gmail.com'><img data-aos='fade-up' className='icon' src={require('./assets/gmail.svg')} alt='gmail'/></a>
                    <a href='https://www.linkedin.com/in/ahmadkhaleel96/'><img className='icon' src={require('./assets/linkedin.svg')} alt='js' data-aos='fade-left'/></a>
                  </div>
                </div>

                <div className='card' data-aos='fade-up'>
                  <img className='portrait' src={require('./assets/mai.jpg')} alt='mile adder'/>
                  <div className='name' data-aos='fade-right'>Mai Y. Al-Shagareen</div>
                  <div className='cardUnderLine' data-aos='fade-right'></div>
                  <div className='background' data-aos='fade-right'>Former pharmacist assistant.</div>
                  <div className='background' data-aos='fade-right'><br />Now a Mile Adder.</div>
                  <div className='icons'>
                    <a href='https://github.com/maialshagarin'> <img data-aos='fade-right' className='icon' src={require('./assets/github.svg')} alt='github'/> </a>
                    <a href='mai.yusuf28@yahoo.com'><img data-aos='fade-up' className='icon' src={require('./assets/gmail.svg')} alt='gmail'/></a>
                    <a href='https://www.linkedin.com/in/mai-yusuf-69a819194/'><img className='icon' src={require('./assets/linkedin.svg')} alt='js' data-aos='fade-left'/></a>
                  </div>
                </div>

                <div className='card' data-aos='fade-up'>
                  <img className='portrait' src={require('./assets/obada.png')} alt='mile adder'/>
                  <div className='name' data-aos='fade-right'>Obada M. Al-Matrami</div>
                  <div className='cardUnderLine' data-aos='fade-right'></div>
                  <div className='background' data-aos='fade-right'>Former Computer Information Scientist.</div>
                  <div className='background' data-aos='fade-right'>Now a Mile Adder.</div>
                  <div className='icons'>
                    <a href='https://github.com/obadaalmatrami92'> <img data-aos='fade-right' className='icon' src={require('./assets/github.svg')} alt='github'/> </a>
                    <a href='obada.matrami92@gmail.com'><img data-aos='fade-up' className='icon' src={require('./assets/gmail.svg')} alt='gmail'/></a>
                    <a href='https://www.linkedin.com/in/obada-almatrami'><img data-aos='fade-left' className='icon' src={require('./assets/linkedin.svg')} alt='js'/></a>
                  </div>
                </div>

                <div className='card' data-aos='fade-left'>
                  <img className='portrait' src={require('./assets/bayann1.jpg')} alt='mile adder'/>
                  <div className='name' data-aos='fade-right'>Bayan M. Al-Shagareen</div>
                  <div className='cardUnderLine' data-aos='fade-right'></div>
                  <div className='background' data-aos='fade-right'>Former Mathematician.</div>
                  <div className='background' data-aos='fade-right'><br />Now a Mile Adder.</div>
                  <div className='icons'>
                    <a href='https://github.com/bayanmhmd'> <img data-aos='fade-right' className='icon' src={require('./assets/github.svg')} alt='github'/> </a>
                    <a href='bayana.mhmd99@gmail.com'><img data-aos='fade-up' className='icon' src={require('./assets/gmail.svg')} alt='gmail'/></a>
                    <a href='https://www.linkedin.com/in/bayan-al-shaqareen-48a81a194/'><img data-aos='fade-left' className='icon' src={require('./assets/linkedin.svg')} alt='js'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
  
export default Cards;