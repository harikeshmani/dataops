import React, { Component } from 'react';
import ComponentTwo from './ComponentTwo';

class ComponentDemo extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			dob: '',
		}
	}

	render() {

		console.log('the state is: ', this.state);

		return(
			<div className='main-body'>
				<div className='main-content'>
					<h1 
						className='center-text'
						style={{ color: 'red' }}
					>
						Component Demo
					</h1>
					{/* <h2>Component Demo</h2>
					<h3>Component Demo</h3>
					<h4>Component Demo</h4>
					<p>Strat writing something in this paragraph</p>
					<li>option 1</li>
					<li>option 2</li>
					<li>option 3</li>
					<li>option 4</li>
					<li>option 5</li> */}
					<div className="paragraph-content">
						What's up?
						<br />
						DataOps
					</div>

					<div className="paragraph-content">
						What's up?
						<br />
						DataOps
					</div>

					<div className="paragraph-content">
						<ComponentTwo name={this.state.firstName}/>
					</div>

					<div className="paragraph-content">

						<input
							type='input'
							placeholder='First Name'
							onChange={(event) => this.setState({ firstName: event.target.value })}
						/>
						<br/>


						<input
							type='input'
							placeholder='Last Name'
							onChange={(event) => this.setState({ lastName: event.target.value })}
						/>

						<input
							type='checkbox'
							// placeholder='Last Name'
							// onChange={(event) => this.setState({ lastName: event.target.value })}
						/>
						
						
						
						<br/><br/>
						<input
							type="date"
							placeholder={'Date of Birth'}
							onChange={(event) => this.setState({ dob: event.target.value })}
							/><br/><br/>


						Gender: <br/>
						<label>
							<input
								type="radio"
								name="react-tips"
								// value="option1"
								// onChange={() => setGender('male')}
								// checked={gender === 'male'}
							/>
							Male
						</label><br/><br/>
						<label>
							<input
								type="radio"
								name="react-tips"
								// value="option1"
								// onChange={() => setGender('female')}
								// checked={gender === 'female'}
							/>
							Female
						</label><br/><br/>
						<label>
							<input
								type="radio"
								name="react-tips"
								// value="option1"
								// onChange={() => setGender('other')}
								// checked={gender === 'other'}
							/>
							Other
						</label><br/><br/>

						<button>Submit</button>

					</div>

					<div className="paragraph-content">
						First Name is: {this.state.firstName} <br/>
						Last Name is: {this.state.lastName} <br/>
					</div>

				</div>
			</div>
			
		)
	}
}

export default ComponentDemo;