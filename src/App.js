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
				<section className="c-section-full">
					<div className="o-container o-grid">
						<div className="o-grid__top">
							<h1 className="u-margin-top-2x">Hello World!</h1>
							<NumericInput onChange={ this.onNumericInputChange } />
							<p className="c-error">{this.state.errorMessage}</p>
						</div>
						<div className="o-grid__middle">
							<Circle diameter={ this.state.numericValue } onClick={this.onCirleClick} />
						</div>
						<div className="o-grid__bottom">
							<h2>{this.state.title}</h2>
							<p>{this.state.content}</p>
						</div>
					</div>
				</section>
			</Fragment>
		);
  	}
}

export default App;
