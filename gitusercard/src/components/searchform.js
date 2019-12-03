import React from 'react'


function SearchForm(props) {

    const handleChange = (e) => {
        props.alterQuery(e.target.value)
    }
    function handleSubmit(e) {

    }
    return (
        <form>
            <input value={props.currTerm} type='text' onChange={handleChange} />
            <button type='submit'>Change User</button>
        </form>
    )
}

export default SearchForm