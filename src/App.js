import React, { Component, Fragment } from 'react';

// Components
import NumericInput from './Components/NumericInput';
import Circle from './Components/Circle';
import getJsonPlaceholder from './Services/jsonPlaceholderService';

// CSS and assets
import './scss/App.scss';


class App extends Component {

	constructor(props) {

		super(props);

		this.state = {
			numericValue: '',
			errorMessage: '',
			title: '',
			content: ''
		};

		this.onNumericInputChange = this.onNumericInputChange.bind(this);
		this.onCirleClick = this.onCirleClick.bind(this);

	}

	onNumericInputChange(event) {

		let value = event.target.value;

		if (value > 100) {

			this.setState({  
				errorMessage: 'The value can’t be bigger than 100',
				numericValue:  0,
				title: '',
				content: ''
			});

		} 
		
		else {

			this.setState({  
				numericValue:  value,
				errorMessage: '' 
			}); 

		}
	}

	onCirleClick(value) {

		getJsonPlaceholder(value)
		
		.then(response => {
			if (!response.ok) {
				alert('The service is down');
				return;
			}

			response.json()
				.then(responseData => {

					this.setState({
						title: responseData.title,
						content: responseData.body
					});
			});
		});

  	}

	render() {

		return (
			<Fragment>
				
				<div className="o-container u-text-align-center">
					<h1>The Amazing Circle</h1>
					<NumericInput onChange={ this.onNumericInputChange } />
					<p>{this.state.errorMessage}</p>
					<br/>
					<Circle diameter={ this.state.numericValue } onClick={this.onCirleClick} />
					<h1>{this.state.title}</h1>
					<p>{this.state.content}</p>
				</div>
			</Fragment>
		);
  	}
}

export default App;
