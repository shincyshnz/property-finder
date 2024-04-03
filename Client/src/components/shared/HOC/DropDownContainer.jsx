import { Container } from "./Container";

// Define HOC
const WithDropDown = (WrappedComponent) => {
  return (props) => (
  <Container ContainerClassName={props.ContainerClassName}>
      <WrappedComponent {...props} />
    </Container>
    );
};

export default WithDropDown;
