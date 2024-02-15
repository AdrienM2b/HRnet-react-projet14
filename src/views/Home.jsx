import React from 'react';
import FormEmployee from './FormEmployee';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Create Employee</h1>
      <Link to='/employee-list'>View employee list</Link>
      <FormEmployee />
    </>
  );
}
