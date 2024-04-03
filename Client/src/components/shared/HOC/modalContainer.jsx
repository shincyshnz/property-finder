const ModalContainer = ({ children, modalContainerClassName = 'fixed w-full py-5 flex-center bg-opacity-60 max-h-screen px-10 md:px-0 bg-slate-900 inset-0 z-40 overflow-hidden' }) => {
    return (
        <div className={modalContainerClassName}>
            {children}
        </div>
    )
}

// Define HOC
const WithModal = (WrappedComponent) => {
    return (props) => (
        <ModalContainer modalContainerClassName={props.modalContainerClassName}>
            <WrappedComponent {...props} />
        </ModalContainer>
    );
};

export default WithModal