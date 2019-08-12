import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleInputChange(event) {
    event.persist();

    const { name, value} = event.target;
    setInputs(inputs =>{
      return {
        ... inputs,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
      event.preventDefault();
      Axios.post("/api/pets",{
        pet: {
          name: inputs.name,
          description: inputs.description,
          age: inputs.age,
          type: inputs.type
        }
      })
        .then(resp =>{setRedirect(true)})
        .catch(err => console.log(err));
  }

  if (redirect) return <Redirect to="/"/>

  return (
  			<div className="container">
      <header>
        <h1>New Pets</h1>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" name="name" required="required" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" name="description" onChange={handleInputChange}></textarea>
          </div>

          <div className="form-group">
            <label>Type</label>
            <select className="form-control" name="size" required="required" onChange={handleInputChange}>
              <option value="CAT">cat</option>
              <option value="DOG">dog</option>
              <option value="INSECT">insect</option>
              <option value="BIRD">bird</option>
              <option value="ACRACNOID">acracnoid</option>
              <option value="REPTILE">reptile</option>
            </select>
          </div>
          <div className="form-group">
            <label>Age</label>
            <input className="form-control" name="age" required="required" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  	);

}

export default New;