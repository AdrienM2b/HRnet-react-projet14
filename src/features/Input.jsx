import React from 'react';

export default function Input({ infos, label, value, type, onChange }) {
  return (
    <>
      <h2>{label}</h2>
      <input
        className='input_container'
        type={type}
        name={infos}
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}
