const Counter = ({ label, value }) => {
  return (
    <div className='counter'>
      <span className='counter-label'>{label}</span>
      <span className='counter-number'>{value}</span>
    </div>
  )
}

export default Counter
