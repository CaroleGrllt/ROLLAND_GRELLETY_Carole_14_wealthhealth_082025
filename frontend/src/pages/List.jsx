import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';
// eslint-disable-next-line react-hooks/rules-of-hooks
DataTable.use(DT);

export default function List() {
    const tableData = [
        [
            'Mina',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Mina',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Mina',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Marou',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Mina',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Belo',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Marou',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Mina',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Belo',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Marou',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Mina',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],
                [
            'Belo',
            'Ratus',
            '01/11/1985',
            '1 rue Hatier',
            'Paris',
            '75001',
            'France',
            '01/09/1998',
            'HR'
        ],

    ]
    return(
        <div className='list-container'>
            <div className='list-container-title'>
                <h2>List of employee</h2>
            </div>
            <div className="table-container">
                <DataTable
                className='table'
                data={tableData}
                >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>ZIP</th>
                            <th>State</th>
                            <th>Start Date</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                </DataTable>
            </div>
        </div>
    )
}