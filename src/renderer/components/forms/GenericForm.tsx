export function GenericForm(props: {
    className?: string;
    children: React.ReactNode[] | React.ReactNode;
    onClose: () => void;
}) {
    function handleFormClose() {
        props.onClose();
        console.debug('Form closed');
    }

    return (
        <>
            <div className={props.className}>{props.children}</div>
            <div onClick={handleFormClose} className='close-overlay' />
        </>
    );
}
