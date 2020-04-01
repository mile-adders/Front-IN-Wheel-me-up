/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
 
export default function Example() {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [visible, setVisible] = useState(true);
  const [pastAnswer, setPastAnswer] = useState('');

  useEffect(() => {
    axios.get('https://wheel-me-up-m.herokuapp.com/api/v1/question')
      .then(response => {
        console.log('response:', response.data);
        setPosts(response.data);
        setId(response.data);
      })
      .catch(error => {
        console.log(error);
        setErrMsg('Error retrieving Data');
      });    return () => {
      console.log('error');
    };
  }, []);

  let handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    let state = {'question': question, 'answer': answer};
    console.log('state', state);
    axios.post('https://wheel-me-up-m.herokuapp.com/api/v1/question', state)
      .then(response => {
        console.log('GET response', response);
        console.log('_id',response.data._id);
        // setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
        setErrMsg('Error retrieving data');
      });
    setVisible(!visible);
  };

  const answerForm =  visible ? 
    <form onSubmit = {handleSubmit} className='answerForm' data-aos='fade-up'>
      <input type='text' className='answerInput' name='answer' value={answer} placeholder='answer' onChange={(e) => setAnswer(e.target.value)} />
      <button type='submit' className='answerSubmit'>answer!</button>
    </form>
    : null; 

  const questionForm =  
    <form onSubmit={handleSubmit} className='questionForm' data-aos='fade-left'>
      <input type='text' className='questionInput' name='question' placeholder='Ask your Question' value={question} onChange={(e) => setQuestion(e.target.value)} /> 
      <button type='submit' className='questionSubmit'>ask</button>
    </form>;


  const questionAnswers = visible ? <form onSubmit={handleSubmit} className='answerForm' data-aos='fade-up'>
    <input type='text' className='answerInput' name='pastAnswer' value={pastAnswer} placeholder='answer' onChange={ e => setPastAnswer(e.target.value)} />
    <button type='submit' className='answerSubmit'>answer</button>
  </form> : null;

  return (
    <div className='moreQDiv'>
      <div className='moreQ' data-aos='fade-up'>More Questions?</div>
      <div className='qUnderLine' data-aos='fade-right'></div>
      <img className='qImg' src={require('./result.svg')} data-aos='fade-up' />
      <Accordion className='MoreQAccordion' data-aos='fade-up'>
        {questionForm}
        <AccordionItem className='moreAccordionItem'>
          <AccordionItemHeading className='qAccordion'>
            <AccordionItemButton>
              {question}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='answer' data-aos='fade-left'>
              {answerForm}
              <div className='answer' >{answer}</div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        {posts.map(data => (
          <AccordionItem key={data._id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {data.question}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='answer'>
                {data.answer}
                {pastAnswer}
                {questionAnswers}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
