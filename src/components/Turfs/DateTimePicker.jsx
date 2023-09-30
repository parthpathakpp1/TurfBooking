import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';

const DateTimePicker = ({ selectedDate, selectedTime, onDateChange, onTimeChange }) => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 text-lg">Select Date:</label>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        dateFormat="yyyy-MM-dd"
        className="border rounded-md px-3 py-2 w-full"
      />
      <label className="block text-gray-700 mt-4 text-lg">Select Time:</label>
      <TimePicker
        value={selectedTime}
        onChange={onTimeChange}
        clockClassName="text-2xl" // Adjust the font size here
        className="border rounded-md px-3 py-2 w-full"
      />
    </div>
  );
};

export default DateTimePicker;
