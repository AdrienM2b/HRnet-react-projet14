import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'First Name',
    selector: (row) => row.firstname,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row) => row.lastname,
    sortable: true,
  },
  {
    name: 'Birthday',
    selector: (row) => row.birth,
    sortable: true,
  },
  { name: 'Start Date', selector: (row) => row.startDate, sortable: true },
  { name: 'Street', selector: (row) => row.street, sortable: true },
  { name: 'City', selector: (row) => row.city, sortable: true },
  { name: 'State', selector: (row) => row.stateUSA, sortable: true },
  { name: 'Zip Code', selector: (row) => row.zipCode, sortable: true },
  { name: 'Departement', selector: (row) => row.departement, sortable: true },
];

export default function TableEmployee() {
  const [searchTerm, setSearchTerm] = useState('');
  const employees = useSelector((state) => state.employee);

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const data = filteredEmployees.length ? filteredEmployees : [{}];

  return (
    <>
      <h1>Current Employees</h1>
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={data}
        noDataComponent={<div>Aucune donnée disponible</div>}
        pagination
      />
      <Link to='/'>Home</Link>
    </>
  );
}
