const Button = ({ handleClick, children, icon, fill, type }) => {
  const colorBackground = fill ? "bg-primary-color" : "";
  const colorText = fill ? "text-white" : "text-primary-color";

  return (
    <button type={type} onClick={handleClick} className={`hover:scale-105 duration-150 font-semibold flex items-center justify-center border-solid border-2 border-[#292327] ${colorBackground} py-2 px-3 min-w-28 rounded-lg`}>
      {icon}
      <span className={`ml-2 ${colorText}`}>{children}</span>
    </button>
  )
}

export default Button
