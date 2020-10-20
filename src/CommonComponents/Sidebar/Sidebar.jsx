import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const sideBarStyle = {
	color: 'rgb(200,200,200)',
	textDecoration: 'none'
}

class Sidebar extends Component {

	render() {
		return(
			<div className=' side-nav'>
				<Link style={sideBarStyle} to='/'>
					<div className='side-nav-button center-text' style={{ marginTop: '0' }}>Home</div>
				</Link>

				<Link style={sideBarStyle} to='componentdemo'>
					<div className='side-nav-button center-text'>Component Demo</div>
				</Link>

				<Link style={sideBarStyle} to='functionalComponents'>
					<div className='side-nav-button center-text'>Functional Component</div>
				</Link>

				<Link style={sideBarStyle} to='propsAndState'>
					<div className='side-nav-button center-text'>Props and State</div>
				</Link>

				<Link style={sideBarStyle} to='lifeCycle'>
					<div className='side-nav-button center-text'>React Life Cycle Methods</div>
				</Link>

				<Link style={sideBarStyle} to='hooks'>
					<div className='side-nav-button center-text'>React Hooks</div>
				</Link>

				<Link style={sideBarStyle} to='formHandling'>
					<div className='side-nav-button center-text'>Form Handling</div>
				</Link>

				<Link style={sideBarStyle} to='todolist'>
					<div className='side-nav-button center-text'>To Do List App</div>
				</Link>
				
				<Link style={sideBarStyle} to='redux'>
					<div className='side-nav-button center-text'>Redux and Reducers</div>
				</Link>

				<Link style={sideBarStyle} to='fetchdata'>
					<div className='side-nav-button center-text'>Fetching Data</div>
				</Link>

				<Link style={sideBarStyle} to='weather'>
					<div className='side-nav-button center-text'>Weather App</div>
				</Link>

				<Link style={sideBarStyle} to='contactus'>
					<div className='side-nav-button center-text'>Contact Us</div>
				</Link>				
				
			</div>
		)
	}
}

export default Sidebar;
