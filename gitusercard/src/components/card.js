import React from 'react'


function SearchForm(props) {
    console.log(props)
    return (
        <div className='Card'>
            <h1>{`${props.data.login}`}</h1>
            <img src={`${props.data.avatar_url}`} />
        </div >
    )
}

export default SearchForm