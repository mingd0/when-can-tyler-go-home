const Button = ({ text, color, onClick }) => {
  return (
    <button style={{ backgroundColor: color }}
      onClick={onClick} className='btn btn-block'>
      {text}
    </button>
  )
}

export default Button
