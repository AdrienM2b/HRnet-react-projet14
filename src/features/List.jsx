import React, { useState } from 'react';

export default function List({ label, infos, data, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(data[0].name);

  const toggleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const selectOption = (option, e) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange({ target: { name: infos, value: option } });
  };
  return (
    <>
      <h2>{label}</h2>
      <div className='dropdown' id={`${infos}_container`}>
        <button onClick={toggleOpen} className='dropdown-header'>
          {selectedOption}
        </button>
        {isOpen && (
          <div className='dropdown-body'>
            {data.map((datas, index) => (
              <div
                value={datas.name}
                key={index}
                name={infos}
                onClick={(e) => {
                  e.preventDefault();
                  selectOption(datas.name);
                }}
              >
                {datas.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
