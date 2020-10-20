const DefaultState = {};

export const GetWeatherReducer = (state=DefaultState, action) => {
    console.log('inside current reducer', action);
    switch(action.type) {
        case 'CURRENT_WEATHER':
            const updatedState = Object.assign({}, state, action.payload);
            return updatedState

        default:
            return state
    }
}

export const GetForecastReducer = (state=DefaultState, action) => {
    console.log('inside forecast reducer: ', action);
    
    switch(action.type) {
        case 'WEATHER_FORECAST':
            return action.payload

        default:
            return state
    }
}