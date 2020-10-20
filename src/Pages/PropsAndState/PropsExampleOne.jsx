import React, { Component } from 'react';

class PropsExampleOne extends Component {
	render() {
		return(
			<div className='paragraph-content'>
				<div>this.props.name</div>
				<div>Name: {this.props.name}</div>
				<div>Why DataOps: {this.props.explanation}</div>
				{this.props.children}
			</div>
		)
	}
}

export default PropsExampleOne;