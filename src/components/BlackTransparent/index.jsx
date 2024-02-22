import './style.scss';



export default function BlackTransparent({ children, onClick, classes }) {
    let defaultCN = 'black-transparent-btn';
    for (const cl of classes) {
        defaultCN += ' ';
        defaultCN += cl;
    }
    return (
        <button
            className={defaultCN}
            onClick={onClick}
        >
            {children}

        </button>
    )
}