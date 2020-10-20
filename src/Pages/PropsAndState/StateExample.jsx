import React, { Component } from 'react';
import { propsDetails, stateDetails } from './constants';

class StateExample extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count : 0,
			name: 'John',
			subscribed: false,
			countTwo: 0
		}
	}

	handleDecreaseCount() {
		const { count } = this.state;
		this.setState({
			count: count - 1
		});
	}

	handleIncreaseCount() {
		this.setState({
			count: this.state.count + 1
		});
	}

	handleSubscribe() {
		this.setState({
			subscribed: !this.state.subscribed
		})
	}

	handleSecondCount() {
		this.setState(
			{ countTwo: this.state.countTwo + 5},
			() => { console.log('inside callback function: ', this.state.countTwo) }
		);
		console.log('count two after setStae: ', this.state.countTwo);
	}

	render() {
		return(
			<div>
				<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className='paragraph-content' style={{ marginRight: '1em', width: '50%' }}>
					<div style={{ fontWeight: 'bold', marginBottom: '1em' }}>props</div>
					{
						propsDetails.map((prop, index) => {
							return(
								<li key={index}>{prop}</li>
							)
						})
					}
				</div>
				<div className='paragraph-content' style={{ width: '50%' }}>
				<div style={{ fontWeight: 'bold', marginBottom: '1em' }}>state</div>
					{
						stateDetails.map((state, index) => {
							return(
								<li key={index}>{state}</li>
							)
						})
					}
				</div>
			</div>

			<h4 style={{ color: 'gray' }}>Example of state</h4> 

			<div className='paragraph-content'>
				Hello Mr. {this.state.name}
				<br/>
				Guest count is: 
				<button onClick={() => this.handleDecreaseCount()}>-</button>
				{this.state.count}
				<button onClick={() => this.handleIncreaseCount()}>+</button>
				<br/>
				<br/>

				{this.state.subscribed ? 'Thank you for subscribing' : 'Please Subscribe'}
				<br/>
				<button
					className='common-button primary'
					onClick={() => this.handleSubscribe()}
				>
					{this.state.subscribed ? 'Unsubscribe' : 'Subscribe'}
				</button>

				<br/><br/>
				Do something after the setState() is called <br/>
				count: {this.state.countTwo} <br/>
				<button className='common-button primary' onClick={() => this.handleSecondCount()}>Increase</button>

			</div>
			
		</div>
			

		);
	}
}

export default StateExample;