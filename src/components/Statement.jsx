import React from 'react'

const Statement = ({ quoteRandom }) => {
    return (
        <div>
            <p className='box__quote'>{quoteRandom.quote}</p>
            <h1 className='box__author'>{quoteRandom.author}</h1>
        </div>
    )
}

export default Statement