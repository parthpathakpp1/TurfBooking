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
        clockClassName="text-3xl" // Adjust the font size here
        className="border rounded-md px-3 py-2 w-45" // Increase width to 25px
      />
    </div>
  );
};

export default DateTimePicker;
