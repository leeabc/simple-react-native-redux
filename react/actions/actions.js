export const ADD_MESSAGE = 'ADD_MESSAGE';
export function addMessage(text){
	return {type: ADD_MESSAGE, text}
}

export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export function removeMessage(){
	return {type: REMOVE_MESSAGE}
}

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export function requestWeather(){
	return {type: REQUEST_WEATHER}
}

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export function receiveWeather(weather){
	console.log(weather);
	return {
		type: RECEIVE_WEATHER,
		weather: weather
	}
}

export function fetchWeather(city = "taipei"){
	return function(dispatch){
		dispatch(requestWeather());
		return fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=2de143494c0b295cca9337e1e96b00e0&units=metric')
				.then(response => response.json())
				.then(json => dispatch(receiveWeather(json)))
	}
}