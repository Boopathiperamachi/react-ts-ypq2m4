import * as React from 'react';
import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid';
interface props {
  users: any;
}
const columns: GridColumns = [
  { field: 'first_name', headerName: 'First Name', width: 100, editable: true },
  { field: 'last_name', headerName: 'Last Name', editable: true },
  {
    field: 'dob',
    headerName: 'dob',
    width: 100,
    editable: true,
  },
  {
    field: 'designation',
    headerName: 'Designation',
    width: 100,
    editable: true,
  },
  {
    field: 'experience',
    headerName: 'Experience',
    width: 100,
    editable: true,
  },
];

export default function BasicEditingGrid(props) {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={props.users}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}
