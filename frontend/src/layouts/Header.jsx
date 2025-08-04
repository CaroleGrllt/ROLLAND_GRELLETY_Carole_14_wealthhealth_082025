import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUserPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/' className="nav-logo">
                    <img src={Logo} alt="Wealth Health Logo" />
                    <h1 className='sr-only'>Wealth Health</h1>
                </Link>
                <ul className='nav-links'>
                    <li>
                        <Link className='main-nav-item' to='/'>
                            <FontAwesomeIcon icon={faHouse} className='house' />
                            Home
                        </Link>
                    </li>
                    |
                    <li>
                        <Link className='main-nav-item' to='/new-employee'>
                            <FontAwesomeIcon icon={faUserPlus} className='user-plus' />
                            Create new employee
                        </Link>
                    </li>
                    |
                    <li>
                        <Link className='main-nav-item' to='/list-employees'>
                            <FontAwesomeIcon icon={faAddressBook} className='address-book' />
                            Employees list
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}