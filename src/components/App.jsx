import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function handleChange(event) {
    // const value = event.target.value;
    // const name = event.target.name;
    //can also be written as
    const { name, value } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return { fname: value, lname: prevValue.lname };
      } else if (name === "lName") {
        return { fname: prevValue.fname, lname: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
