import React, { Component } from 'react';
import image from '../../resources/imageHill.jpeg';

class ImageContainer extends Component {
	render() {
		return(
			<div className='img-container-flex'>
				<div className='img-container'><img src={image} alt="Logo" />
					<button>Life is good when the mind is at peace</button>
				</div>
			</div>
		)
	}
}

export default ImageContainer;