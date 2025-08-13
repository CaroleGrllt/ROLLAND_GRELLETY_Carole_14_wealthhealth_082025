import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
<<<<<<< HEAD
import { Select, Option } from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import States from "../data/states.json";
=======
import { Select, Option } from '@material-tailwind/react'
import { FaChevronDown } from "react-icons/fa"
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import "react-datepicker/dist/react-datepicker.css";
import Button from './Button'
import States from '../data/states.json'
>>>>>>> origin/main
import { addEmployee } from "../redux/actions/employee.action";

export default function Form() {
  const dispatch = useDispatch();

  // Valeurs initiales
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(null); 
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [selectedState, setSelectedState] = useState(""); 
  const [startDate, setStartDate] = useState(null);       
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

    const fields = {
      firstName,
      lastName,
      birthDate,
      street,
      city,
      zip,
      selectedState,
      startDate,
      selectedDepartment,
    };

    if (Object.values(fields).some((field) => !field)) {
      setErrorMessage("All fields are required.");
      return;
    }

<<<<<<< HEAD
    try {
      await dispatch(addEmployee(fields));
      setErrorMessage("");

      resetForm();

    } catch (err) {
      const errorMessage = err?.message || "An unexpected error occurred";
      console.error(errorMessage);
      setErrorMessage(errorMessage);
    }
  };

  return (
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
              id="birth"
              className="datepicker-birth"
              showIcon
              dateFormat="dd/MM/yyyy"
              placeholderText="jj/mm/aaaa"
              maxDate={new Date()}
              minDate={new Date("1900-01-01")}
              selected={birthDate}               
              onChange={(date) => setBirthDate(date)}
              isClearable
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
            <Select
              id="state"
              className="select"
              variant="static"
              arrow={<FaChevronDown />}             
              menuProps={{ className: "max-h-48 overflow-y-auto w-full" }}
              value={selectedState}                  
              onChange={(value) => setSelectedState(value ?? "")}
            >
              {States.map((state) => (
                <Option key={state.name} value={state.abbreviation}>
                  {state.name}
                </Option>
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
              id="startDate"
              className="datepicker-startDate"
              showIcon
              dateFormat="dd/MM/yyyy"
              placeholderText="jj/mm/aaaa"
              maxDate={new Date()}
              minDate={new Date("1900-01-01")}
              selected={startDate}               
              onChange={(date) => setStartDate(date)}
              isClearable
            />
          </div>
          <div className="content department-content">
            <label htmlFor="department">Department</label>
            <Select
              id="department"
              className="select"
              variant="static"
              arrow={<FaChevronDown />}             
              value={selectedDepartment}             
              onChange={(value) => setSelectedDepartment(value ?? "")}
            >
              <Option value="Sales">Sales</Option>
              <Option value="Marketing">Marketing</Option>
              <Option value="Engineering">Engineering</Option>
              <Option value="Human Resources">Human Resources</Option>
              <Option value="Legal">Legal</Option>
            </Select>
          </div>
        </div>
      </section>

      <Button type="submit" logo={faUserPlus} text={"Create employee"} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
=======
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
                            variant="static"
                            arrow={<FaChevronDown />}
                            menuProps={{
                                className: "max-h-48 overflow-y-auto" // max hauteur ~ 6 options
                            }}
                            value={selectedState}
                            onChange={(value) => setSelectedState(value)}
                        >
                            {States.map(state => (
                                <Option key={state.name} value={state.abbreviation}>
                                    {state.name}
                                </Option>
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
                            id='department'
                            className="select"
                            variant="static"
                            arrow={<FaChevronDown />}
                            value={selectedDepartment}
                            onChange={(value) => setSelectedDepartment(value)}
                        >
                            <Option value="Sales">Sales</Option>
                            <Option value="Marketing">Marketing</Option>
                            <Option value="Engineering">Engineering</Option>
                            <Option value="Human Ressources">Human Ressources</Option>
                            <Option value="Legal">Legal</Option>
                        </Select>
                    </div>
                </div>
            </section>
            <Button type='submit' logo={faUserPlus} text={'Create employee'}></Button>  
            {errorMessage && <p className='error-message'>{errorMessage}</p>} 
        </form>
    )
>>>>>>> origin/main
}