import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary.js'

class App extends Component {
    constructor() {
        super()
        this.state = {

            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response2 => this.setState({robots: response2})
        )
        
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        
    }
    render(){
        
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(
            (robot) => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            }
        )

        return !robots.length ?
        <h1 className="tc">Loading...</h1> :
        (
            <div className='tc'>
    
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                    
                </Scroll>
     
    
            </div>
        );
    }
}

export default App;
