import React from "react";
import './list.scss'

const List = (props) => {
    const {numbers} = props

    return (
        <ul>
            {numbers.map(num => (<li key={num}>{num}</li>))}
        </ul>
    )
}

export default List