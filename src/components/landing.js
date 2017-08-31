import React, {Component} from 'react';
import { Text, TextInput, View } from 'react-native'; //View is primitve element to position/wrap/style
import {NativeRouter, Route, Link} from 'react-router-native';
import SearchBar from './searchbar.js';
import Title from './title.js';
import Results from './results.js';

class Landing extends Component {

	render(){
		return (
		<View> 
			<Title />
			<SearchBar />
			<Results />
		</View>	
		);
	}
}	

export default Landing;