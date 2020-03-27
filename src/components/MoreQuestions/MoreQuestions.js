/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { If, Else } from '../if/index.js';

function FAQ({
  children,
  defaultOpen = [0, 1],
  open: openFromProps,
  onToggle: onToggleFromProps = () => {},
}) {
  const isControlled = () => (openFromProps ? true : false);
  const [open, setIsOpen] = useState(defaultOpen);
  const getOpen = () => (isControlled() ? openFromProps : open);
  const isOpen = index => {
    return getOpen().includes(index) ? true : false;
  };
  const onToggle = index => {
    if (isControlled()) {
      onToggleFromProps(index);
    } else {
      if (getOpen().includes(index)) {
        setIsOpen(getOpen().filter(item => item !== index));
      } else {
        setIsOpen([...getOpen(), index]);
      }

      onToggleFromProps(index);
    }
  };
  return (
    <dl>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isOpen: isOpen(index),
          onToggle: () => onToggle(index),
        });
      })}
    </dl>
  );
}

function Question({ children, isOpen, answerId, onToggle }) {
  return (
    <dt>
      <button
        className="FAQ__question"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        {children(isOpen, onToggle)}
      </button>
    </dt>
  );
}

function Answer({ children, id, isOpen }) {
  const mergedClassname = classNames('FAQ__answer', {
    'FAQ__answer--hidden': !isOpen,
  });
  return (
    <dd>
      <p className={mergedClassname} id={id}>
        {children}
      </p>
    </dd>
  );
}

function QAItem({ children, isOpen, onToggle }) {
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isOpen: isOpen,
      onToggle: onToggle,
    });
  });


}

FAQ.QAItem = QAItem;
FAQ.Question = Question;
FAQ.Answer = Answer;



export default function MoreQuestions() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [posts, setPosts] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const [visible, setVisible] = useState(false);
  const [pastAnswer, setPastAnswer] = useState('');

  let handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    let state = {'question': question, 'answer': answer};
    console.log('state', state);
    axios.post('https://wheel-me-up-m.herokuapp.com/api/v1/question', state)
      .then(response => {
        console.log('response', response);
        // setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
        setErrMsg('Error retrieving data');
      });
    setVisible(!visible);
  };

  let handleAnswer = e => {
    e.preventDefault();
    e.target.reset();
    let state = {'question': question, 'answer': answer};
    axios.post('https://wheel-me-up-m.herokuapp.com/api/v1/question', state)
      .then(response => {
        console.log('answer', response.answer);
        setPosts(response.data);
      })
      .catch(error => { console.log(error);
        setErrMsg('Error retrieving data');
      });
    setVisible(!visible);
  };
  
  useEffect(() => {
    axios.get('https://wheel-me-up-m.herokuapp.com/api/v1/question')
      .then(response => {
        console.log('response:', response);
        // setPosts(response.data.ourData);
      })
      .catch(error => {
        console.log(error);
        setErrMsg('Error retrieving Data');
      });    return () => {
      console.log('error');
    };
  }, []);

  const answerForm =  visible ? 
    <form onSubmit = {handleAnswer}>
      <input type='text' className='Input' name='answer' value={answer} placeholder='answer' onChange={(e) => setAnswer(e.target.value)} />
      <button type='submit'>answer!</button>
    </form>
    : null; 

  const questionForm =    <form onSubmit={handleSubmit}>
    <input type='text' className='Input' name='question' value={question} placeholder='Question' onChange={(e) => setQuestion(e.target.value)} /> 
    <button type='submit'>ask</button>
  </form>;

  return (
    <div>
      <div className="FAQ">
        More Questions?
        {questionForm}
        <FAQ>
          <FAQ.QAItem>
            <FAQ.Question answerId="q1">
              {(isOpen, onToggle) => {
                return (
                  <>
                    {isOpen ? 'Q: ' : 'Q: '}
                    <span>{question}</span>
                  </>
                );
              }}
            </FAQ.Question>
            <FAQ.Answer id="q1">
              {answerForm}
              {answer}
            </FAQ.Answer>
          </FAQ.QAItem>
        </FAQ>
        <div>
          {posts.map( data => (
            <FAQ>
              <FAQ.QAItem>
                <FAQ.Question answerId={data._id}>
                  {(isOpen, onToggle) => {
                    return(
                      <>
                        {isOpen ? 'Q: ' : 'Q: '}
                        <span>{data.question}</span>
                      </>
                    );
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q1">
                  {/* {answerForm} */}
                  {visible ? 
                    <form onSubmit = {handleAnswer}>
                      <input type='text' className='Input' name='pastAnswer' value={pastAnswer} placeholder='answer' onChange={(e) => setPastAnswer(e.target.value)} />
                      <button type='submit'>answer!</button>
                    </form>
                    : null }
                  {data.answer}
                </FAQ.Answer>
              </FAQ.QAItem>
            </FAQ>
          ))}
        </div>
      </div>
    </div>
  );
} 

