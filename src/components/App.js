
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <h1>User Information</h1>
      <label>
        Name: 
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email: 
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <br />
      <div>
        <strong>Current values in store:</strong>
        <br />
        Name - {name}
        <br />
        Email - {email}
      </div>
    </div>
  )
}

export default App
