import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

let marked = require("marked");
class App extends Component {
	constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      output: ''
    };
  }

handleChange (e){
	this.setState ({ output: e.target.value });

}

  render() {

    return (
		<Grid className='App Container'>
			<Row>
				<Col md={5}>
				    <div className="InputSide textCenter py-5">
			  			<h1>MarkDown Input</h1>
						<form>
							<FormGroup controlId = "formControlsTextarea">
								<FormControl
									componentClass="textarea"
									placeholder = "Enter your desired Markdown"
									value = { this.state.output }
									onChange = { this.handleChange}
									rows = '30'
								 />
							</FormGroup>
						</form>
		      		</div>
				</Col>
				<Col md={1}>
				</Col>
				<Col md={6}>
					<div className="OutputSide">
			  			<h1 className = "textCenter">Markdown Output </h1>
						<div dangerouslySetInnerHTML = {{__html:marked(this.state.output)}}>
						</div>
					</div>
				</Col>
			</Row>
			<footer> <b>Designed by Sulaiman</b></footer>
	  </Grid>

    );
  }
}

export default App;
