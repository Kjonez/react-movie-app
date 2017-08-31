import React, {Component} from 'react';
import { Text, TextInput, View } from 'react-native'; 
import axios from 'axios';

const API_KEY = 'AIzaSyD3rHMO3f4zB_bOf0gEJ1_RWlBERxAUGqk';

class Results extends Component {

	render(){
		return (
			// axios.get('https://api.themoviedb.org/3/genre/28/movies?api_key=b09e8ebef5593dfec03034ec1ab31d35&language=en-US&include_adult=false&sort_by=created_at.desc').then(resp => {
			// 	console.log(resp)
			// })
			axios.get('https://s-apis.learningfuze.com/hackathon/youtube/search.php').then(resp => {
				console.log(resp)
			})
		);
	}
}	

export default Results;