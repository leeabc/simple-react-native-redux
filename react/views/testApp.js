import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addMessage, fetchWeather } from '../actions/actions';

class TestApp extends Component{
	constructor(props){
		super(props);
		const { dispatch } = this.props;
		dispatch(fetchWeather());
	}

	render(){
		const { message, weather, dispatch } = this.props;
		console.log(weather);
		return (
			<View style={{flex: 1}}>
				<TextInput 
					style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={(text) => dispatch(addMessage(text))}
					placeholder="Message"
					/>
				<Text style={{flex: 1, fontSize: 20, color: '#FF0000'}}>{message}</Text>
				<TextInput 
					style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={(text) => { dispatch(fetchWeather(text)) }}
					placeholder="Weather"
					/>
				<View style={{flex: 1}}>
					<Text style={{flex: 1, fontSize: 20, color: '#FFAA00'}}>isFetching: {(weather.isFetching)?"Fetching":"Done"}</Text>
					<Text style={{flex: 1, fontSize: 20, color: '#FF5500'}}>City: {weather.city}</Text>
					<Text style={{flex: 1, fontSize: 20, color: '#FF3300'}}>Temp: {weather.temperature}</Text>
				</View>
			</View>
		);
	}
}

TestApp.propTypes = {
	message: PropTypes.string.isRequired,
	weather: PropTypes.object.isRequired
};

function select(state){
	return {
		message: state.message,
		weather: state.weather
	}
}

export default connect(select)(TestApp);