/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import classNames from 'classnames';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function FrequentlyAskedQuestions() {
  return (
    <div className='FAQDiv'>
      <Accordion className='accordion' data-aos='fade-up'>
        <div className='FAQ' data-aos='fade-left'>Frequently Asked Questions</div>
        <div className='blackLine' data-aos='fade-right'></div>
        <img className='FAQImage' src={require('./faq.svg')} data-aos='fade-up' alt='FAQ'/>
        <AccordionItem className='item'>
          <AccordionItemHeading className='heading'>
            <AccordionItemButton>
              Does Wheel Me Up truly work?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='panel'>
            <div className='answer'>
              Da!!!!
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        
        <AccordionItem className='item'>
          <AccordionItemHeading className='heading'>
            <AccordionItemButton>
                Can i pay online for my car?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='answer'>
                yes, you can and to insure safety the money will not be withdrawn from the user's bank account, until there is confirmation from both parties that the car is given.
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        
        <AccordionItem className='item'>
          <AccordionItemHeading className='heading'>
            <AccordionItemButton>
                What problem does wheel me up solve?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='answer'>
                Our Main goal is to connect the community together, and elements the car companies extra expenses. 
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        
        <AccordionItem className='item'>
          <AccordionItemHeading className='heading'>
            <AccordionItemButton>
                Is There any other projects like Wheel Me Up?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='answer'>
                Actually, we the 'Mile Adders' have a very detailed plan to connect the community, car renting is the first step to do that.
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        
        <AccordionItem className='item'>
          <AccordionItemHeading className='heading'>
            <AccordionItemButton>
                I just want to ask... like why the website is... dddddaaaaannnnggggeeeerrrrr!!!!!
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='answer'>
              aaaaahhhhhh Unagi 
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      
      </Accordion>
    </div>
  );
}