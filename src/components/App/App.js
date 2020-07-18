import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp'
import TodoList from '../TodoList/TodoList'

// I added this commen

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			businesses: []
		};

		this.searchYelp = this.searchYelp.bind(this);
	}

	searchYelp(term, location, sortBy) {
		Yelp.search(term, location, sortBy).then(businesses => {
			console.log(businesses)
			this.setState({businesses : businesses});
		});
	}

	render() {
		return (
			<div className="App">
				<h1>ravenous</h1>
				<TodoList />
				<SearchBar searchYelp={this.searchYelp}/>
				<BusinessList businesses={this.state.businesses}/>
			</div>
		);
	}
}

export default App;
