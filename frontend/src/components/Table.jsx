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

export default function Table({data = [], columns = [], className = ""}) {

    return(
        <DataTable
            className={className}
            data={data}
            columns={columns}
            options={{
                responsive: true,
                columnDefs: [{ targets: 0, responsivePriority: 1 }]
            }}
        />
    )
}