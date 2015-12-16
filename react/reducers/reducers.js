import { combineReducers } from 'redux'
import { ADD_MESSAGE, REMOVE_MESSAGE, REQUEST_WEATHER, RECEIVE_WEATHER } from '../actions/actions'

function message(state = "", action){
	switch(action.type){
		case ADD_MESSAGE:
			return action.text;
		case REMOVE_MESSAGE:
			return "";
		default:
			return state;
	}
}

function weather(state = {
	isFetching: false,
	temperature: 0,
	city: "",
}, action){
	switch(action.type){
		case REQUEST_WEATHER:
			return Object.assign({}, state, {isFetching: true});
		case RECEIVE_WEATHER:
			return Object.assign({}, state, {
				isFetching: false,
				temperature: action.weather.main.temp,
				city: action.weather.name
			});
		default:
			return state;
	}
}

const testApp = combineReducers({
	message,
	weather
});

export default testApp