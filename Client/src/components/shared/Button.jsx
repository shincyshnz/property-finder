
const Button = ({ classname="", text="", handleClick }) => {
  return (
    <button className={`${classname} px-3 py-2 text-color-blue`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
