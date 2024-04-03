
const DropDownContainer = ({
  children,
  dropDownContainerClassName = "relative inline-block text-left",
}) => {
  return (
  <div className={dropDownContainerClassName}>
    {children}</div>
  );
};

// Define HOC
const WithDropDown = (WrappedComponent) => {
  return (props) => (
    <DropDownContainer dropDownContainerClassName={props.dropDownContainerClassName}>
      <WrappedComponent {...props} />
    </DropDownContainer>
  );
};

export default WithDropDown;
