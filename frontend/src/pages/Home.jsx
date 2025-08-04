import Logo from '../assets/img/logo.webp'
import Button from "../components/button";
import { faUserPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return(
        <div className="home-container">
            <div className="home-logo-container">
                <img src={Logo} alt="Wealth Health logo" />
            </div>
            <h1>HRnet</h1>
            <div className="home-cta-container">
                <Button logo={faUserPlus} text={'Create employee'} link={'new-employee'}></Button>
                <Button logo={faAddressBook} text={'List of employees'} link={'list-employees'}></Button>
            </div>
        </div>
    )
}
