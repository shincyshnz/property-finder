const Button = ({ classname = "", text = "", handleClick, icons = "" }) => {
  return (
    <button
      className={`${classname} px-3 py-2 text-color-blue`}
      onClick={handleClick}
    >
      
      <div className="flex-center gap-2">{icons !== "" && icons} {text}</div>
    </button>
  );
};

export default Button;
