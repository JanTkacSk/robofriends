import React from 'react';
import CardList from './CardList';
import {robots} from './robots.js';
import Searchbox from './SearchBox.js';

const state = {
    robots: robots,
    seatchfield: ''
}

const App = () => {
    return(
        <div className='tc'>

            <h1>RoboFriends</h1>
            <Searchbox />
            <CardList robots={robots} />
            
        </div>
    )
}

export default App;
