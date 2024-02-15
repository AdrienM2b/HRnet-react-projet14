import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { fr } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('fr', fr);

export default function DateSelector({ value, onChange, name }) {
  const [startDate, setStartDate] = useState(value || new Date());
  const handleChange = (date) => {
    const dateInString = date.toLocaleDateString('fr');
    setStartDate(date);
    onChange({ target: { name, value: dateInString } });
  };
  return (
    <DatePicker
      wrapperClassName='datePicker'
      selected={startDate}
      onChange={handleChange}
      locale='fr'
    />
  );
}
