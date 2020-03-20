import React from 'react';

const SearchBox = () => {
    return (
        <div className="pa2 ">
            <input type="search" 
            className="pa3 ba b--green bg-lightest-blue"
            name="robots" 
            placeholder="Search Robots" />
        </div>
    );
}

export default SearchBox;