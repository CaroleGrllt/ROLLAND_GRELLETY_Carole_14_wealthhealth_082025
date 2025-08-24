// PACKAGES NPMJS
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import Responsive from 'datatables.net-responsive';
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';

// eslint-disable-next-line react-hooks/rules-of-hooks
DataTable.use(DT);
// eslint-disable-next-line react-hooks/rules-of-hooks
DataTable.use(Responsive);

import { useSelector } from 'react-redux';

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

    return(
        <div className='list-container'>
            <div className='list-container-title'>
                <h2>List of employees</h2>
            </div>
            <div className="table-container">
                <DataTable
                className='table'
                data={tableData}
                columns={[
                        { title: 'First Name', data: 'firstName' },
                        { title: 'Last Name', data: 'lastName' },
                        { title: 'Date of Birth', data: 'birthDate' },
                        { title: 'Street', data: 'street' },
                        { title: 'City', data: 'city' },
                        { title: 'ZIP', data: 'zip' },
                        { title: 'State', data: 'selectedState' },
                        { title: 'Start Date', data: 'startDate' },
                        { title: 'Department', data: 'selectedDepartment' },
                    ]}
                    options={{
            responsive: true,
            columnDefs: [{ targets: 0, responsivePriority: 1 }]
          }}
                />
            </div>
        </div>
    )
}