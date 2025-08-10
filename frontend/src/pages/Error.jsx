import Button from '../components/Button'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Error() {
    return(
    <div className='error-container'>
        <h2>404</h2>
        <p>OOPS! PAGE NOT FOUND.</p>
        <Button type='button' logo={faHouse} text='Go back to home' link='/'/>
    </div>
    )
}