import React from 'react';
import Card from './Card.js';
//import {robots} from './robots.js'

const cardList = ({robots}) => {

    const allCards = robots.map((user,i)=> {
        
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
        
    });

    return(
        <div>
            {allCards}
        </div>
    );
}

export default cardList;