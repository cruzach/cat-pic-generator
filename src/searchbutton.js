import React from 'react';
import './searchbutton.css';

const Searchbutton = ({loading , onButtonClick}) => {
    return(
        <div>
            <button className="btn" onClick={ () => onButtonClick()}>{loading ? '..........🐈' : 'I love cats!'}</button>
        </div>
    );
}

export default Searchbutton;