import React, { Component } from 'react';
import ImageContainer from '../../CommonComponents/ImageContainer/ImageContainer';
import PropsExampleOne from './PropsExampleOne';
import PropsExampleTwo from './PropsExampleTwo';
import FunctionalProp from './FunctionalProp';
import FunctionalPropTwo from './FunctionalPropTwo';
import StateExample from './StateExample';
import StateExampleFunctional from './StateExampleFunctional';

import PassingFunctionAsProps from './PassingFunctionAsProps';

class PropsAndState extends Component {
	render() {
		return(
			<div className=' main-body'>
				<div className='main-content'>
					<ImageContainer />

					<h1 className='center-text'>Props And State</h1>
						<h4 style={{ color: 'gray' }}>Demonstration of passing props to a class component</h4> 
						<PropsExampleOne
							name={"DataOps"}
							explanation={"This is the best place to learn ReactJS"}
						/>


						<h4 style={{ color: 'gray' }}>Demonstration of passing child props to a class component</h4> 
						<PropsExampleOne>
							<p>This is an example of passing child component</p>
						</PropsExampleOne>
						<PropsExampleOne>
							<button
								style={{
									color: 'white',
									backgroundColor: 'teal',
									border: '1px solid teal',
									borderRadius: '3px',
									cursor: 'pointer',
									marginTop: '1em' //Find out the difference between 'em' and 'rem'
								}}
							>
								Click me
							</button>
						</PropsExampleOne>


						<h4 style={{ color: 'gray' }}>Passing the common button component of the app</h4> 
						<PropsExampleOne>
							<button className='common-button primary'>Submit</button>
							<button className='common-button secondary'>Cancel</button>
							<button className='common-button danger'>Danger</button>
							<button className='common-button warning'>Are you sure?</button>
						</PropsExampleOne>


						<h4 style={{ color: 'gray' }}>Conditional Rendering</h4>
						<PropsExampleTwo>
							<button className='common-button primary'>Submit</button>
							<button className='common-button secondary'>Cancel</button>
							<button className='common-button danger'>Danger</button>
							<button className='common-button warning'>Are you sure?</button>
						</PropsExampleTwo>
						<PropsExampleTwo name='DataOps'>
							<br/>
							This is a simple text box <br/>
							<input type='text' /><br/>
							<br/>
							Style for other components can be used but not advisable <br/>
							<input type='text' className='warning'/> 
						</PropsExampleTwo>
						<PropsExampleTwo
							explanation={"This is the best place to learn ReactJS"}
						>
							<button className='common-button primary'>Submit</button>
						</PropsExampleTwo>


						<h4 style={{ color: 'gray' }}>Passing Props to functional component is really easy</h4>
						<FunctionalProp 
							name={"DataOps"}
							explanation={"This is the best place to learn ReactJS"}
						/>

						<h4 style={{ color: 'gray' }}>Demonstration of passing child props to a functional component</h4> 
						<FunctionalPropTwo name='This is DataOps'>
							<button className='common-button primary'>Submit</button>
							<button className='common-button secondary'>Cancel</button>
							<button className='common-button danger'>Danger</button>
							<button className='common-button warning'>Are you sure?</button>
						</FunctionalPropTwo>

						<h4 style={{ color: 'gray' }}>Let's understand state of a class component</h4> 
						<StateExample />

						<h4 style={{ color: 'gray' }}>Let's understand state of a functional component</h4> 
						<StateExampleFunctional />


						<h4 style={{ color: 'gray' }}>Examples of passing functions as props</h4> 
						<PassingFunctionAsProps />
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				</div>
			</div>
		)
	}
}

export default PropsAndState;