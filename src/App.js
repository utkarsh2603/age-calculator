import React, { useState } from 'react';
import DatePicker from './DatePickers';

function App() {
  const [dob, setDOB] = useState(null);
  const [age, setAge] = useState(null);

  const handleDateChange = (date) => {
    setDOB(date);
  };

  const calculateAge = () => {
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);

      let years = today.getFullYear() - birthDate.getFullYear();
      const months = today.getMonth() - birthDate.getMonth();
      const days = today.getDate() - birthDate.getDate();

      if (months < 0 || (months === 0 && days < 0)) {
        years--;
      }

      setAge(years);
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div>
        <h4>Select your Date of Birth:</h4>
        <DatePicker value={dob} onChange={handleDateChange} />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age}</p>}
    </div>
  );
}

export default App;
