export const Container = ({ children, ContainerClassName = '' }) => {
    return (
        <div className={ContainerClassName}>
            {children}
        </div>
    )
}