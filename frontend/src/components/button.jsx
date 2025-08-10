import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router";

export default function Button({type, logo, text, link, onClick}) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (onClick) {
            onClick();  // Appeler la fonction onClick si elle est fournie (par exemple handleSubmit())
        }
        if (link) {
            navigate(link); // Effectuer la redirection si `link` est fourni
        }
    }
    return (
        <button type={type} onClick={handleClick} className='cta'>
            <FontAwesomeIcon icon={logo} className={text} />
            <span>{text}</span>
        </button>
    )
}