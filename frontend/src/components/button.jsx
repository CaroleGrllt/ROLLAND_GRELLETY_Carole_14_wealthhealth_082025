import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router";

export default function Button({logo, text, link}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/'+link)
    }

    return (
        <button onClick={handleClick} className='cta'>
            <FontAwesomeIcon icon={logo} className={text} />
            <span>{text}</span>
        </button>
    )
}