import "../App.css";
import React from 'react';


const Line = (props) => {
    return (
      <ul className="Line">
        <li onChange={props.handleChange} onClick={() => navigator.clipboard.writeText(props.symbol)}>
          <p>{props.title}</p>
          <p>{props.symbol}</p>
        </li>
      </ul>
    );
  };


export default Line;
