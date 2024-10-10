import React, { useState } from 'react';

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  // Function to handle month change
  const handleMonthChange = (event) => {
    setMonth(parseInt(event.target.value));
  };

  // Function to handle year change
  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value));
  };

  // Function to get the number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // Function to get the name of the month
  const getMonthName = (month) => {
    const date = new Date(year, month - 1, 1);
    return date.toLocaleString('default', { month: 'long' });
  };

  // Function to generate an array of days in the month
  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month - 1, 1).getDay();
    const calendar = [];

    // Add empty cells for previous month's days
    for (let i = 0; i < firstDay; i++) {
      calendar.push('');
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(i);
    }

    return calendar;
  };

  const calendar = generateCalendar();

  return (
    <div className="calendar">
      <h1>Calendar</h1>

      <div>
        <label htmlFor="month">Month:</label>
        <select id="month" value={month} onChange={handleMonthChange}>
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>

        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={handleYearChange}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((day, index) => (
            <td key={index}>{day}</td>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
