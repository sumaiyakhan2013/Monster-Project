import React from 'react';
import './searchList-comp.style.css';



export const SearchList = props => 
    {
         return (
          <input type='search' placeholder={props.placeholder} onChange= {props.handleChange }/>
         )  
    }
      
    


