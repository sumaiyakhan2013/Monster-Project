import React from 'react';
import './cardList-comp.style.css';
import {Card} from '../card-comp/card-comp.jsx';

export const CardList = props => 
    {
        console.log(props);
         return (
           <div className = 'cardListContainer'>  
            { 
            props.monsters.map( monster=> <Card key={monster.id}  monster={monster} /> )
            }
            </div>
         )  
    }
      
    


