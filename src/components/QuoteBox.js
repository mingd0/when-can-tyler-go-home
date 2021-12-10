const QuoteBox = ({ quote, author }) => {
    return (
        <div className='quote-box'>
            <p>{quote}</p><br/>
            <p><i>{`-${author}`}</i></p>
        </div>
    )
}

export default QuoteBox
