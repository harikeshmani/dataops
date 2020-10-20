import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { GetWeatherReducer, GetForecastReducer } from './reducers/GetWeatherReducer';
import { IncreaseDecreaseReducer, IPLReducer } from './ActionReducerDemo';

const combinedReducers = combineReducers({
    weatherData: GetWeatherReducer,
    forecastData: GetForecastReducer,
    myCount: IncreaseDecreaseReducer,
    IPLData: IPLReducer
})


const middleWares = [thunkMiddleware]
const store = createStore(combinedReducers, applyMiddleware(...middleWares))

export default store;