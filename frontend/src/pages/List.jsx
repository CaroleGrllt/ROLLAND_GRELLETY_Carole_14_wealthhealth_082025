
import { useSelector } from 'react-redux';
import Table from '../components/Table';

export default function List() {

    const employeesState = useSelector(state => state.employees.employees)
    console.log(employeesState)

    const tableData = employeesState.map(employee => ({
        firstName: employee.firstName,
        lastName: employee.lastName,
        birthDate: employee.birthDate,  
        street: employee.street,
        city: employee.city,
        zip: employee.zip,
        selectedState: employee.selectedState,
        startDate: employee.startDate,  
        selectedDepartment: employee.selectedDepartment
    }))

    const columns = [
        { title: "First Name", data: "firstName" },
        { title: "Last Name", data: "lastName" },
        { title: "Date of Birth", data: "birthDate" },
        { title: "Street", data: "street" },
        { title: "City", data: "city" },
        { title: "ZIP", data: "zip" },
        { title: "State", data: "selectedState" },
        { title: "Start Date", data: "startDate" },
        { title: "Department", data: "selectedDepartment" },
    ];

    return(
        <div className='list-container'>
            <div className='list-container-title'>
                <h2>List of employees</h2>
            </div>
            <div className="table-container">
                <Table 
                    data={tableData}
                    columns={columns}
                    className='table'
                />
            </div>
        </div>
    )
}