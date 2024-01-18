import { Link } from 'react-router-dom'

interface Props {
    children: string;
    colors?: 'Primary';
    onClick: () => void;
    page: string;
}

const ButtonLink = ({ children, onClick, colors = 'Primary', page }: Props) => {
    return (
        <Link to={page}>
            <button className={"btn btn-" + colors} onClick={onClick}>{children}</button>
        </Link>

    )
}

export default ButtonLink

