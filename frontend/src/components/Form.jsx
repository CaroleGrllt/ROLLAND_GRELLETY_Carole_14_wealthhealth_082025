// REACT
import { useState } from "react";

// REDUX
import { useDispatch } from "react-redux";

// DATAS
import States from "../data/states.json";
import { addEmployee } from "../redux/actions/employee.action";

// COMPONENTS
import Button from "./Button";
import DatePicker from "./DatePicker";
import Selector from "./Select";

// PACKAGES NPMJS - Modal (Select and datepicker in other files)
import { Modal } from '@carole-rg/hr-modal-react';
import '@carole-rg/hr-modal-react/styles.css';

// ICONS
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";



export default function Form() {
  const dispatch = useDispatch();

  // Valeurs initiales
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState(); 
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [selectedState, setSelectedState] = useState(""); 
    const [startDate, setStartDate] = useState();       
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [open, setOpen] = useState(false);

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setBirthDate(null);
        setStreet("");
        setCity("");
        setZip("");
        setSelectedState("");
        setStartDate(null);
        setSelectedDepartment("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Regex : pas de chiffres, espaces, ... .
        const validValueRegex = /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u;

        const firstNameToSend = firstName.trim()
        const lastNameToSend  = lastName.trim()
        const streetToSend    = street.trim()
        const cityToSend      = city.trim()
        const zipToSend       = zip

        if(
            !firstNameToSend ||
            !lastNameToSend ||
            !birthDate ||
            !streetToSend ||
            !cityToSend ||
            !zipToSend ||
            !selectedState ||
            !startDate ||
            !selectedDepartment
        ) {
            setErrorMessage("All fields are required.")
            return    
        }


        if (!validValueRegex.test(firstNameToSend) ||
            !validValueRegex.test(lastNameToSend)  ||
            !validValueRegex.test(cityToSend) 
        ) {
            setErrorMessage("The first name, last name, and city fields must not contain numbers or only spaces.")
            return;
        }

        // zip : uniquement des chiffres, et AUCUN espace
        if (/\s/.test(zipToSend) || !/^\d+$/.test(zipToSend)) {
            setErrorMessage("The zip code must be made up of numbers without spaces.")
            return
        }

        // Âge : startDate au moins 15 ans après birthDate
        const birthPlus15 = new Date(birthDate)
        birthPlus15.setFullYear(birthPlus15.getFullYear() + 15)
        if (startDate < birthPlus15) {
            setErrorMessage("Start date must be at least 15 years after date of birth.")
            return
        }

        const fields = {
            firstName: firstNameToSend,
            lastName : lastNameToSend,
            birthDate : birthDate.toLocaleDateString("en-GB"),
            street : streetToSend,                
            city : cityToSend,
            zip : zipToSend,     
            selectedState,
            startDate : startDate.toLocaleDateString("en-GB"),
            selectedDepartment,
        }

        try {
        await dispatch(addEmployee(fields))
        setErrorMessage("")

        resetForm()
        setOpen(true)

        } catch (err) {
        const errorMessage = err?.message || "An unexpected error occurred";
        console.error(errorMessage);
        setErrorMessage(errorMessage);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="container identity-container">
                    <p>Identity</p>
                    <div className="identity-inputs-container">
                        <div className="name-inputs-container">
                            <div className="firstName-content">
                            <label htmlFor="firstName">First name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="John"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            </div>
                            <div className="lastName-content">
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Smith"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            </div>
                        </div>
                        <div className="date-of-birth-container">
                            <label htmlFor="birth">Date of birth</label>
                            <DatePicker 
                                value={birthDate}
                                onChange={setBirthDate}
                            />
                        </div>
                    </div>
                </section>

                <section className="address-container">
                    <p>Address</p>
                    <div className="container address-inputs-container">
                    <div className="content street-content">
                        <label htmlFor="street">Street</label>
                        <input
                        type="text"
                        id="street"
                        name="street"
                        placeholder="1 av. Kennedy"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        />
                    </div>
                    <div className="content city-content">
                        <label htmlFor="city">City</label>
                        <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New-York"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="content zip-content">
                        <label htmlFor="zip">Zip</label>
                        <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="07008"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        />
                    </div>
                    <div className="content state-content">
                        <label htmlFor="state">State</label>
                        <Selector
                            id="state"
                            value={selectedState}
                            onChange={setSelectedState}
                            options={States.map((s) => ({ value: s.abbreviation, label: s.name }))}
                        />
                    </div>
                    </div>
                </section>
                <section>
                    <p>Information</p>
                    <div className="container information-inputs-container">
                    <div className="content start-content">
                        <label htmlFor="startDate">Start date</label>
                        <DatePicker 
                            value={startDate}
                            onChange={setStartDate}
                        />
                    </div>
                    <div className="content department-content">
                        <label htmlFor="department">Department</label>
                        <Selector
                            id="department"
                            value={selectedDepartment}
                            onChange={setSelectedDepartment}
                            options={[
                                { value: "Sales", label: "Sales" },
                                { value: "Marketing", label: "Marketing" },
                                { value: "Engineering", label: "Engineering" },
                                { value: "Human Resources", label: "Human Resources" },
                                { value: "Legal", label: "Legal" },
                            ]}
                        />
                    </div>
                    </div>
                </section>

                <Button type="submit" logo={faUserPlus} text={"Create employee"} />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                message="new employee registered"
                closeBtn="Back to form"
            />
        </>
    )
}