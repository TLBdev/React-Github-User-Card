import React from 'react'
import Card from './card'

function CardList(props) {
    console.log(props)
    return (
        <div>
            {props.data.map(e => { return <Card data={e} /> })}
        </div>
    )
}

export default CardList