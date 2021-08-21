import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';


class App extends Component {
	constructor() {
		super();
		this.state = {
			'robots': robots,
			'searchfeild': ''
		}
	}

	onSearchChange = (event) => {
		this.setState({'searchfeild': event.target.value})
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
		})
		return (
		<div className='tc'>
			<h1 className='f1'> RoboFriends - Behnam Shahriari </h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={filteredRobots} />
		</div>
		);
	}
}

export default App;