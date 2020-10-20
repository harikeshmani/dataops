import React, { Component } from 'react';
import ImageContainer from '../../CommonComponents/ImageContainer/ImageContainer';
import FunctionalComponentOne from './FunctionalComponentOne';
import { NotDefaultFunction } from './FunctionalComponentOne';
import FunctionalComponentTwo from './FunctionalComponentTwo';
import { NonDefaultArrowFunction } from './FunctionalComponentTwo';
import ClassComponentExample from './ClassComponentExample';
import ProperComponent from './ProperComponent';

class Container extends Component {
	render() {
		return(
			<div className=' main-body'>
				<div className='main-content'>
					<ImageContainer />
					<h1 className='center-text'>Functional Components</h1>
					<h3>Functional Component Example One</h3>
					<FunctionalComponentOne />
					<NotDefaultFunction />
					<h3>Functional Component Example Two</h3>
					<FunctionalComponentTwo />
					<NonDefaultArrowFunction />
					<h3>A class component example</h3>
					<ClassComponentExample />
					<h3>We have seen a lot of types regarding how to write class and functional components</h3>
					<h2>But which one is correct?</h2>
					<h2>Which One to use????</h2>
					<h4>Modern React documentation advises to use functional components over class components</h4>
					<h4>
						And in functional Component, it is preferred to use arrow functions. Because they have certain
						advantages over simple JS functions. It is the most modern and elegant way right now...
					</h4>
					<ProperComponent />
					<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				</div>
			</div>
		)		
	}
}

export default Container;