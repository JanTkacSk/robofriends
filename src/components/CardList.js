import React from 'react';
import Card from './Card.js';
//import {robots} from './robots.js'

const cardList = ({robots}) => {

    //throw new Error("Noo!");

    return(
        <div>
            {
                robots.map((user,i)=> {
                    return (
                        <Card key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} />)
                    })
            }
        </div>
    );
}

export default cardList;