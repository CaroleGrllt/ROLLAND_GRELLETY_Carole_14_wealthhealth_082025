import Button from "../components/Button";
import { faUserPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return(
        <div className="home-container">
            <div className="home-logo-container">
                <img 
                    src="/logo-256.webp"
                    alt="Wealth Health"
                />        
            </div>
            <h1>HRnet</h1>
            <div className="home-cta-container">
                <Button type='button' logo={faUserPlus} text={'Create employee'} link={'/new-employee'}></Button>
                <Button type='button' logo={faAddressBook} text={'List of employees'} link={'/list-employees'}></Button>
            </div>
        </div>
    )
}
