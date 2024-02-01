import React, { useState } from 'react';
import './Pract.css'

const Pract = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className={`container ${isClicked ? 'active' : ''}`}>
            <h3>Product: {props.name}</h3>
            <h5>price: {props.price}</h5>
            <button onClick={() => setIsClicked(!isClicked)}>Click me..</button>
        </div>
    );
};

export default Pract;