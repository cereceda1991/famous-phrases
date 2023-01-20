import React from 'react'
import ButtonBox from './ButtonBox'
import Statement from './Statement'

const QuoteBox = ({ quoteRandom, handleClick, colorRandom }) => {

    return (
        <article style={{ color: colorRandom }} className='box'>
            <i className='bx bxs-quote-left box__icon'></i>

            <Statement
                quoteRandom={quoteRandom}
            />
            <ButtonBox
                colorRandom={colorRandom}
                handleClick={handleClick} />
        </article>
    )
}

export default QuoteBox


