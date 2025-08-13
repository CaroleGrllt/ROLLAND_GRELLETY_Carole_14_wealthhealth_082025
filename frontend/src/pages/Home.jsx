import Button from "../components/Button";
import { faUserPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return(
        <div className="home-container">
            <div className="home-logo-container">
                <img 
                    src="/logo-256.webp"
                    srcSet="/logo-256.webp 256w,
                            /logo-384.webp 384w,
                            /logo-512.webp 512w,
                            /logo-768.webp 768w"
                    sizes="(max-width: 480px) 256px, (max-width: 768px) 384px, 512px"
                    width="512" height="512"
                    fetchPriority="high"
                    decoding="async"
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
