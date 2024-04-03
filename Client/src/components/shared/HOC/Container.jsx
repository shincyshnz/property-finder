export const Container = ({ children, ContainerClassName = '' }) => {
    return (
        <div className={ContainerClassName}>
            {children}
        </div>
    )
}

// Define HOC
const WithContainer = (WrappedComponent) => {
    return (props) => (
    <Container ContainerClassName={props.ContainerClassName}>
        <WrappedComponent {...props} />
      </Container>
      );
  };
  
  export default WithContainer;