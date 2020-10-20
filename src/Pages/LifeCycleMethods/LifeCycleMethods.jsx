import React, { Component } from 'react';
import ImageContainer from '../../CommonComponents/ImageContainer/ImageContainer';

class LifeCycleMethods extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
		console.log('Inside the constructor... Executed First');
	}

	componentDidMount() {
		console.log('inside component did mount... Executed Third');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('inside componetDidUpdate().... ');
		console.log('prev props: ', prevProps);
		console.log('prev state: ', prevState);
		console.log('snapshot: ', snapshot);
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		return 'This is fired just before the component is updated';
	}

	// Not useful any more
	// componentWillReceiveProps() {
	// }
	componentWillUnmount() {
		console.log('fired when component unmounts... Used for clean up');
		
	}

	handleCountUp() {
		const { counter } = this.state;
		this.setState({ counter: counter + 1 })
	}

	render(){
		console.log('inside render... Executed second');
		return(
			<div className=' main-body'>
				<div className='main-content'>
					<ImageContainer />
					<h1 className='center-text'>React Life cycle methods</h1>

					<div className='paragraph-content'>
						<li>Life cycle methods can only be used for Class Components</li>
						<li>In Functional Components we can use Hooks to emulate life cycle methods</li>
						<li>In the life cycle, the constructer() is executed first</li>
						<li>render() is executed second and everytime the component is updated</li>
						<li>
							componentDidMount() is executed after the render. It is fired only when the component 
							is mounted to the DOM. It will not be fired everytime the component is updated.
							It is a space for initialization of the component. 
						</li>
						<li>
							componentDidUpdate() is called everytime the component is updated
						</li>

						Counter value: {this.state.counter}
						<br/>
						<button onClick={() => this.handleCountUp()}>CLick</button>
					</div>
				</div>
			</div>
		)
	}


}

export default LifeCycleMethods;