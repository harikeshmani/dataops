import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ImageContainer from '../../CommonComponents/ImageContainer/ImageContainer';
import {IndianStates} from './constants';
import { checkAllChar,isPositiveInt } from './utils';

const FormHandling = () =>{
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [gender, setGender] = useState('male');
	const [address, setAddress] = useState('');
	const [indState, setIndState] = useState('');
	const [pin, setPin] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);


	const handleChangeFirstName = (name) => {
    if(checkAllChar(name)) {
			setFirstName(name)
    }
	}

	const handleChangeLastName = (name) => {
    if(checkAllChar(name)) {
			setLastName(name)
    }
	}

	const handleSetPin = (p) => {
		if((isPositiveInt(p) || p === '') && p.length <= 6) {
			setPin(p);
		}
	}

	const handleSubmit = (event) => {
		console.log('submitting the form: ', firstName, lastName, userName, gender, address, indState, pin, isAgreed);
		event.preventDefault();
		// Validate data and set error for home work
	}

	//restrict wile entering a number

	return(
		<div className=' main-body'>
			<div className='main-content'>
				<ImageContainer />
				<br/>
				<h1 className='center-text'>Form Handling</h1>
				<div className='paragraph-content'>
					<form onSubmit={handleSubmit}>
						Enter First Name:<br/>
						<input
							type="input"
							placeholder={'First Name'}
							value={firstName}
							// onChange={(event) => setFirstName(event.target.value)}
							onChange={(event) => handleChangeFirstName(event.target.value)}

						/><br/><br/>

						Enter Last Name:<br/>
						<input
							type="input"
							placeholder={'Last Name'}
							value={lastName}
							onChange={(event) => {handleChangeLastName(event.target.value)}}
						/><br/><br/>

						Enter User Name:<br/>
						<input
							// Uncontrolled component
							type="input"
							placeholder={'User Name'}
							onChange={(event) => {setUserName(event.target.value)}}
						/><br/><br/>

						Enter Date of Birth:<br/>
						<input type="date" placeholder={'Date of Birth'} /><br/><br/>

						Gender: <br/>
						<label>
							<input
								type="radio"
								name="react-tips"
								value="option1"
								onChange={() => setGender('male')}
								checked={gender === 'male'}
							/>
							Male
						</label><br/><br/>
						<label>
							<input
								type="radio"
								name="react-tips"
								value="option1"
								onChange={() => setGender('female')}
								checked={gender === 'female'}
							/>
							Female
						</label><br/><br/>
						<label>
							<input
								type="radio"
								name="react-tips"
								value="option1"
								onChange={() => setGender('other')}
								checked={gender === 'other'}
							/>
							Other
						</label><br/><br/>
						
						Address : <br/>
						<textarea onChange={(event) => setAddress(event.target.value)}/>
						<br/><br/>

						State:<br/>
						<select defaultValue='' onChange={(s) => {setIndState(s.target.value)}}>
							<option value='' disabled hidden>Select State</option>
							{
								IndianStates.map((state, index) => {
									return <option value={state} key={index}>{state}</option>
								})
							}
						</select><br/><br/>

						Enter Area PIN Code:<br/>
						<input
							type="input"
							placeholder={'PIN'}
							value={pin}
							onChange={(event) => handleSetPin(event.target.value)}
						/>
						<br/><br/>

						<input type="checkbox" value={isAgreed} onChange={() => setIsAgreed(!isAgreed)}/>
						I agree to the terms and conditions.<br/><br/>

						<button type='submit' className='common-button primary'>Submit</button>
					</form>
					
				</div>
				
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</div>
		</div>
	)

}

export default FormHandling;