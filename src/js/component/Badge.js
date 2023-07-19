import React from 'react'
import Proptypes from 'prop-types'

const Badge = (props) => {
    return (
        <>
            <h4>{props.heading}<span className="badge bg-secondary">{props.text} {props.number}</span></h4>
        </>
    )
}

Badge.propTypes = {
    heading: Proptypes.string,
    text: Proptypes.string,
    number: Proptypes.number
}
export default Badge