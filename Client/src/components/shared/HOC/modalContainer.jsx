import { Container } from "./Container";

// Define HOC
const WithModal = (WrappedComponent) => {
    return (props) => (
        <Container ContainerClassName={props.ContainerClassName}>
            <WrappedComponent {...props} />
        </Container>
    );
};

export default WithModal