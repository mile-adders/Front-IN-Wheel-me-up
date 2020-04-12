/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
  	<form className="test-mailing">
    	<div>
      	<input
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Please describe the issue in detail"
        	required
        	value={this.state.feedback}
      	/>
    	</div>
    	<button type="button" value="Submit" className="btn-btn--submit" onClick={this.handleSubmit} >Send the issue</button>
  	</form>
    );
  }

  handleChange(event) {
    this.setState({feedback: event.target.value});
  }
  handleSubmit (event) {
    const templateId = 'template_id';

    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email});
  }

  sendFeedback (templateId, variables) {
    window.emailjs.send(
  	'gmail', templateId,
  	variables,
  	).then(res => {
    	console.log('Email successfully sent!');
  	})
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
  }}