import React, { Component } from 'react';
import ImageContainer from '../../CommonComponents/ImageContainer/ImageContainer';

class Home extends Component {
	render() {
		return(
			<div className=' main-body'>
				<div className='main-content'>
					<ImageContainer />
					<h1 className='center-text'>Home</h1>
					<div className='sub-header'>Why learn ReactJS from DataOps?</div>
					<div className='paragraph-content'>
						<li>Brilliant faculties from NITs and IIITs with 7+ years of industry experience</li>
						<li>You can join the course with basic html and css knowledge</li>
						<li style={{ fontWeight: 'bold' }}>
							Top-down learning approach where you first understand what to build and 
							learn componenets while building an web app.
						</li>
						<li>
							You will build this application where the pages for each tab are built using a different concept
						</li>
						<li>
							You will complete two applications, ToDoList and Weather App, where all the concepts 
							will be used
						</li>
						<li>
							By the end of the course you will learn everything necessary to land a job for 
							React developer position
						</li>
						<li style={{ fontWeight: 'bold' }}>If you want to revise any concept, you can simply look at the part of a code in this application</li>
					</div>
					<div className='sub-header'>What is ReactJS?</div>
					<div className='paragraph-content'>
						<li>
							React is an open source Java Script library to build user interface. It is not a frame work. 
						</li>
						<li>
							It does one thing and that is building rich User Interfaces.  
						</li>
						<li>
							How ever it has rich ecosystem which works really well with other libraries for routing, 
							fetching data and redux state management. So it can be used efficiently to build complex 
							user interfaces for websites and web apps.
						</li>
						<li>Developed and maintained by Facebook. </li>
						<li>
							More and more developer are adopting ReactJS every single day. So huge community support 
							available.
							</li>
						<li>
							It is one of the most sought out skill set required by companies as all the start ups 
							are developing their UI with React and big companies are converting their existing 
							applications to React.
						</li>
						<li>It is a great skill set to learn to land that front end job you always wanted.</li>
					</div>
					<div className='sub-header'>Why ReactJS?</div>
					<div className='paragraph-content'>
						React has a component based architecture which means you can divide big components to small 
						ones and small ones to even smaller ones, which dramatically increases the readability and 
						reusability of the code. 
						While developing in react, a traditional web site can be broken down into parts like: 
						Header, Footer, Sidebar and main content. Again the header might contain multiple tabs which 
						can be divided into components. Even more, each page may have perticular sections, functions 
						and design emelents which can be represented as a react component. React is so highly modular 
						that even a button or text box can be created as a component and can be reused throughout the 
						application by proving different properties.
					</div>
					<div className='sub-header'>Virtual DOM</div>
					<div className='paragraph-content'>
						DOM stands for Document Object Model. When a web page is loaded, the browser creates a Document
						Object Model of the page. The HTML DOM model is constructed as a tree of Objects
						<br/><br/>
						Where as a virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, 
						representation of a UI is kept in memory and synced with the “real” DOM by a library such as 
						ReactDOM. This process is called reconciliation.
						<br/><br/>
						When you render a JSX element, every single virtual DOM object gets updated. This sounds 
						incredibly inefficient, but the cost is insignificant because the virtual DOM can update so 
						quickly. Once the virtual DOM has updated, then React compares the virtual DOM with a virtual 
						DOM snapshot that was taken right before the update. By comparing the new virtual DOM with a 
						pre-update version, React figures out exactly which virtual DOM objects have changed. This 
						process is called “diffing.” Once React knows which virtual DOM objects have changed, then 
						React updates those objects, and only those objects, on the real DOM. For example if you 
						change one item in a list, the DOM updates the complete list, however the virtual DOM only 
						updates that item in the DOM.
					</div>
				</div>
			</div>
		)
	}
}

export default Home;