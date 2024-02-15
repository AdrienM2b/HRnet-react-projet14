import React, { useState } from 'react';
import '../styles/styles.scss';
import List from '../features/List.jsx';
import Input from '../features/Input.jsx';
import DateSelector from '../features/DateSelector.jsx';
import { states, departement } from '../data.js';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../store/employeeSlice.js';
import { Modal } from 'package-adrienm';

export default function FormEmployee() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const dispatch = useDispatch();
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    birth: '',
    startDate: '',
    street: '',
    city: '',
    stateUSA: '',
    zipCode: '',
    departement: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
    console.log('employee', employee);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(employee));
    setisModalOpen(true);
    setEmployee({
      firstname: '',
      lastname: '',
      birth: '',
      startDate: '',
      street: '',
      city: '',
      stateUSA: '',
      zipCode: '',
      departement: '',
    });
  };
  return (
    <>
      <form className='form_container' onSubmit={handleSubmit}>
        <div className='address_infos_employee_container'>
          <div className='infos_employee_container'>
            <Input
              infos={'firstname'}
              label={'First Name'}
              value={employee.firstname}
              onChange={handleChange}
            />
            <Input
              infos={'lastname'}
              label={'Last Name'}
              value={employee.lastname}
              onChange={handleChange}
            />
            <p>Date of birth</p>
            <DateSelector
              name='birth'
              onChange={handleChange}
              value={employee.birth}
            />
            <p>Start Date</p>
            <DateSelector
              name='startDate'
              onChange={handleChange}
              value={employee.startDate}
            />
          </div>
          <div className='address_container'>
            <div className='input_address_container'>
              <Input
                type={'text'}
                infos={'street'}
                label={'Street'}
                value={employee.street}
                onChange={handleChange}
              />
              <Input
                type={'text'}
                infos={'city'}
                label={'City'}
                value={employee.city}
                onChange={handleChange}
              />
              <List
                infos={'stateUSA'}
                data={states}
                label={'State'}
                // value={employee.stateUSA}
                onChange={handleChange}
              />
              <Input
                type={'number'}
                infos={'zipCode'}
                label={'Zip Code'}
                value={employee.zipCode}
                onChange={handleChange}
              />
            </div>
            <h2>Address</h2>
          </div>
        </div>
        <List
          label={'Departement'}
          infos={'departement'}
          data={departement}
          // value={employee.departement}
          onChange={handleChange}
        />
        <button type='submit'>Save</button>
      </form>
      {isModalOpen && (
        <Modal
          modalOpen={isModalOpen}
          closeModal={() => setisModalOpen(false)}
          text='Employee created !'
        />
      )}
    </>
  );
}
