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
    
  // let handleNotAnsweredQuestions = (e, answer) => {
  //   e.preventDefault();
  //   axios.put(`https://wheel-me-up-m.herokuapp.com/api/v1/question/${id}`, {'answer': answer})
  //     .then(data => console.log(data._id))
  //     .catch(error => console.log(error));
  // };

  const answerForm =  visible ? 
    <form onSubmit = {handleSubmit}>
      <input type='text' className='Input' name='answer' value={answer} placeholder='answer' onChange={(e) => setAnswer(e.target.value)} />
      <button type='submit'>answer!</button>
    </form>
    : null; 

  const questionForm =    <form onSubmit={handleSubmit}>
    <input type='text' className='Input' name='question' value={question} placeholder='Question' onChange={(e) => setQuestion(e.target.value)} /> 
    <button type='submit'>ask</button>
  </form>;

  const questionAnswers = visible ? <form onSubmit={handleSubmit}>
    <input type='text' className='Input' name='pastAnswer' value={pastAnswer} placeholder='answer' onChange={ e => setPastAnswer(e.target.value)} />
    <button type='submit'>answer</button>
  </form> : null;

  return (

    <Accordion className='accordion'>
    More Questions? 
      {questionForm}
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            {question}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div>
            {answerForm}
            {answer}
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
            <div>
              {data.answer}
              {questionAnswers}
              {pastAnswer}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
