import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({logo, text}) {
    return (
        <button className='cta'>
            <FontAwesomeIcon icon={logo} className={text} />
            <span>{text}</span>
        </button>
    )
}