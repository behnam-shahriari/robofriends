import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';


class App extends Component {
	constructor() {
		super();
		this.state = {
			'robots': [],
			'searchfeild': ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({'robots': users}));
	}

	onSearchChange = (event) => {
		this.setState({'searchfeild': event.target.value})
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
		})

		if(this.state.robots.length === 0) {
			return <h1> Loading </h1> 
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'> RoboFriends - Behnam Shahriari </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList robots={filteredRobots} />
				</div>
				);
		}
	}
}

export default App;