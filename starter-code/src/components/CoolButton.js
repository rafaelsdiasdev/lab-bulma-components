import React from 'react'

const coolButton = (props) => {
    return (
    <button className={props.className}>{props.value}</button>
    )
}

export default coolButton