const Button = ({ handleClick, children, icon, fill, type }) => {
  if (fill) {
    return (
      <button onClick={handleClick} className="hover:scale-105 duration-150 flex items-center justify-center border-solid border-2 border-[#292327] bg-[#292327] py-2 px-3 min-w-28 rounded-lg">
        {icon}
        <span className="ml-2 text-white">{children}</span>
      </button>
    )
  }
  return (
    <button type={type} onClick={handleClick} className="hover:scale-105 duration-150 flex items-center justify-center border-solid border-2 border-[#292327] py-2 px-3 min-w-28 rounded-lg">
      {icon}
      <span className="ml-2 text-[#292327]">{children}</span>
    </button>
  )
}

export default Button
