import React, { useRef } from 'react';

 function Uncontroll() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      alert("All fields are required");
      return;
    }

    console.log(userData);

    
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <div style={{ width: "350px", margin: "40px auto" }}>
      <h3> Registration Form</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          ref={nameRef}
        /><br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          ref={emailRef}
        /><br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
