import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/pets/${props.match.params.id}`)
      .then(result =>   setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post(
      '/api/pets/update',
      {
        id: props.match.params.id,
        pet: {
          name: inputs.name,
          description: inputs.description,
          age: inputs.age,
          type: inputs.type
        }
      }
    )
      .then(resp => {
        console.log(resp);
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleInputChange(event) {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;

    setInputs(inputs => {
      return {
        ...inputs, [name]: value
      }
    });
  }

  if (redirect) {
    return <Redirect to="/pets" />;
  }

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
export default Edit;