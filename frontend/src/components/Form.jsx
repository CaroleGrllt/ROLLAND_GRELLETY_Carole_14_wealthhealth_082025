import React, {  useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import Select, { Option } from 'rc-select';
import { FaChevronDown } from "react-icons/fa"
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import "react-datepicker/dist/react-datepicker.css";
import 'rc-select/assets/index.css';
import Button from './Button'
import States from '../data/states.json'
import { addEmployee } from "../redux/actions/employee.action";

export default function Form() {
    const dispatch  = useDispatch()
    const navigate  = useNavigate()

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [birthDate, setBirthDate] = useState()
    const [street, setStreet] = useState()
    const [city, setCity] = useState()
    const [zip, setZip] = useState()
    const [selectedState, setSelectedState] = useState()
    const [startDate, setStartDate] = useState()
    const [selectedDepartment, setSelectedDepartment] = useState()
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()

        const fields = {
            firstName, 
            lastName, 
            birthDate: birthDate.toLocaleDateString("en-GB"), 
            street, 
            city, 
            zip, 
            selectedState, 
            startDate: startDate.toLocaleDateString("en-GB"), 
            selectedDepartment
        }

        if (Object.values(fields).some(field => !field)) {
            setErrorMessage("All fields are required.")
            return;
        }

        try {
            await dispatch(addEmployee(fields))
            setErrorMessage('')
            navigate('/list-employees')
        } catch (err) {
            const errorMessage = err?.message || "An unexpected error occurred";
            console.error(errorMessage)
            setErrorMessage(errorMessage)       
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <section className="container identity-container">
                <p>Identity</p>
                <div className="identity-inputs-container">
                    <div className="name-inputs-container">
                        <div className="firstName-content">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="John" onChange={(e) => setFirstName(e.target.value)}  />
                        </div>
                        <div className="lastName-content">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Smith" onChange={(e) => setLastName(e.target.value)}  />
                        </div>
                    </div>
                    <div className="date-of-birth-container">
                        <label htmlFor="birth">Date of birth</label>
                        <DatePicker
                            id='birth'
                            className="datepicker-birth"
                            showIcon
                            dateFormat='dd/MM/yyyy'
                            placeholderText='jj/mm/aaaa'
                            maxDate={new Date()}
                            minDate={new Date("1900-01-01")}
                            selected={birthDate}
                            onChange={(date) => setBirthDate(date)} 
                        />
                    </div>
                </div>
            </section>
            <section className="address-container">
                <p>Address</p>
                <div className="container address-inputs-container">
                    <div className="content street-content">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" name="street" placeholder="1 av. Kennedy" onChange={(e) => setStreet(e.target.value)}  />
                    </div>
                    <div className="content city-content">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" placeholder="New-York" onChange={(e) => setCity(e.target.value)}  />
                    </div>
                    <div className="content zip-content">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder="07008" onChange={(e) => setZip(e.target.value)}  />
                    </div>
                    <div className="content state-content">
                        <label htmlFor="state">State</label>
                        <Select
                            id='state'
                            className="select"
                            suffixIcon={<FaChevronDown />}
                            placeholder="Alabama"
                            value={selectedState}
                            onChange={(value) => setSelectedState(value)}
                        >
                            {States.map(state => (
                                <Select.Option key={state.name} value={state.abbreviation}>
                                    {state.name}
                                </Select.Option> 
                            ))}
                        </Select>
                    </div>                                                   
                </div>
            </section>
            <section>
                <p>Information</p>
                <div className="container information-inputs-container">
                    <div className="content start-content">
                        <label htmlFor="startDate">Start date</label>
                        <DatePicker
                            id='startDate'
                            className="datepicker-startDate"
                            showIcon
                            dateFormat='dd/MM/yyyy'
                            placeholderText='jj/mm/aaaa'
                            maxDate={new Date()}
                            minDate={new Date("1900-01-01")}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>
                    <div className="content department-content">
                        <label htmlFor="department">Department</label>
                        <Select
                            id='state'
                            className="select"
                            suffixIcon={<FaChevronDown />}
                            placeholder="Sales"
                            value={selectedDepartment}
                            onChange={(value) => setSelectedDepartment(value)}
                        >
                            <Select.Option value="Sales">Sales</Select.Option>
                            <Select.Option value="Marketing">Marketing</Select.Option>
                            <Select.Option value="Engineering">Engineering</Select.Option>
                            <Select.Option value="Human Resources">Human Resources</Select.Option> 
                            <Select.Option value="Legal">Legal</Select.Option>                        
                        </Select>
                    </div>
                </div>
            </section>
            <Button type='submit' logo={faUserPlus} text={'Create employee'}></Button>  
            {errorMessage && <p className='error-message'>{errorMessage}</p>} 
        </form>
    )
}