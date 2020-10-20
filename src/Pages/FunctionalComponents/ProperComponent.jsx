import React from 'react';

// This is an example of most elegant and modern way of writing React Code

const myListOne = [
	{id: 1, value: 'value one'},
	{id: 2, value: 'value two'},
	{id: 3, value: 'value three'},
	{id: 4, value: 'value four'},
	{id: 5, value: 'value five'},
];

const myListTwo = [5,10,15,20,25];

// Initialize an object
const employees = {
	boss: 'Michael',
	secretary: 'Pam',
	sales: 'Jim',
	accountant: 'Oscar'
};

const ProperComponent = () => {

	const addition = (x, y) => {
		return x+y;
	}

	const subtraction = (x, y) => {
		return x-y;
	}

	const increaseOne = () => {
		return(
			myListTwo.map(element => element + 1) //Whatever after arrow is returned
		)
	}

	const iterateAndPrint = () => {
		return myListTwo.map((element) => {
			console.log(element)
			return 1 //return is expected from arrow function. Otherwise shows error
		})
	}

	const iterateAndPrintWithIndex = () => {
		return myListTwo.map((element, index) => {
			console.log('element is: ', element, ' array index is: ', index)
			return null //return is expected from arrow function. Otherwise shows error
		})
	}

	const filterIdslessThenTwo = () => {
		return myListOne.filter((element) => { return element.id > 2 })
	}

	const filterValues = () => {
		let newArr = []
		myListOne.map((element) => {
			if(element.id > 2) {
				newArr.push(element.value)
			}
			return null;
		})
		return newArr;
	}

	const filterValuesTwo = () => {
		return myListOne.filter(element => element.id > 2).map(element => element.value)
	}

	const getKeysOfObject = () => {
		return Object.keys(employees);
	}

	const getValuesOfObject = () => {
		return Object.values(employees);
	}

	const getEntriesOfObject = () => {
		return Object.entries(employees);
	}

	console.log('myListTwo: ', myListTwo);
	console.log('Increase myListTwo: ', increaseOne());
	console.log('iterate and print: ', iterateAndPrint());
	console.log('iterate and print with index: ', iterateAndPrintWithIndex());
	console.log('Filtering: ', filterIdslessThenTwo());
	console.log('Filter values: ', filterValues());
	console.log('Filter values Two : ', filterValuesTwo());
	console.log('Keys of employee object: ', getKeysOfObject());
	console.log('values of employee object: ', getValuesOfObject());
	console.log('Entries of employee object: ', getEntriesOfObject());
	
	

	return(
		<div className='paragraph-content'>
			This component shows how to write most elegant react code
			<br/>
			addition of 7 and 5 is : {addition(7, 5)} <br/>
			subtraction of 7 from 5 is : {subtraction(5, 7)} <br/><br/>

			check console for map function example. <br/><br/>

			Printing myListOne as a list using map:
			{
				myListOne.map((element, index) => {
					return(
						<div key={index}>Id is: {element.id} and value is '{element.value}'</div>
					)
				})
			}
			<br/><br/>
			Printing myListOne if id is greater than 2:
			{
				myListOne.map((element, index) => {
					return(
						element.id > 2
						? <div key={index}>Id is: {element.id} and value is '{element.value}'</div>
						: null
					)
				})
			}
		</div>
	)
}

export default ProperComponent;