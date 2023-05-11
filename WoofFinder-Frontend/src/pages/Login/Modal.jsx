import React, { useEffect, useState } from "react";
import "./Modal.css";

function Modal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const holaElements = document.querySelectorAll(".modal-background *");
      if (![...holaElements].includes(event.target)) {
        var element = document.getElementById("modal");
        element.style.visibility = "hidden";
        //pasar variable a app.jsx
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-background" id="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
