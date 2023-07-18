/* eslint-disable no-unused-vars */
import { useState } from "react";

export function Belajar1() {
  // Bikin state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <h2>Ketik nama Anda!</h2>
      <label>
        Firstname: <input type="text" value={firstName} onChange={handleFirstName}></input>
      </label>

      <br />

      <label>
        Lastname: <input type="text" value={lastName} onChange={handleLastName}></input>
      </label>

      <p>
        Nama lengkap Anda: <b>{fullName}</b>
      </p>
    </>
  );
}
