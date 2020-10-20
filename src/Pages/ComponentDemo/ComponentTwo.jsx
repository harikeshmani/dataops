import React, { Component } from 'react';

class ComponentTwo extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<div>
				This is inside component two
				<br/>
				The first Nane is: {this.props.name}

			</div>
		);
	}
}

export default ComponentTwo;