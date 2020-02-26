import React from 'react';
import './card-comp.style.css';


export const Card = props => 
    {
         return (
            <div className = 'cardBox'>  
                 <img  alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180` }></img>
                <h1>{props.monster.name}</h1> 
                <h4>{props.monster.email}</h4> 
            </div>
         )  
    }
      
    


