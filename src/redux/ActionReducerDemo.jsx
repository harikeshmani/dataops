export const IncreaseNumber = () => {
	return { type: 'INCREAMENT' }
}

export const DecreaseNumber = () => {
	return { type: 'DECREMENT' }
}

export const SetIPLTeam = (team) => {
	return {
		type: 'IPL_TEAM',
		payload: team
	}
}

const count = 0;
export const IncreaseDecreaseReducer = (state=count, action) => {
	switch(action.type) {
		case 'INCREAMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

const DefaultIPLState = {};

export const IPLReducer = (state=DefaultIPLState, action) => {
	switch(action.type) {
		case 'IPL_TEAM':
			const updatedState = Object.assign({}, state, action.payload);
			return updatedState;

		default:
			return state;
	}
}