import React, { Component } from 'react';

class PropsExampleOne extends Component {
	render() {
		return(
			<div className='paragraph-content'>
				{
					this.props.name
					?
					<div>Name: {this.props.name}</div>
					: null
				}
				{
					this.props.explanation
					?
					<div>Why DataOps: {this.props.explanation}</div>
					: null
				}
				{this.props.children}
			</div>
		)
	}
}

export default PropsExampleOne;