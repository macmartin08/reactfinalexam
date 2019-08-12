import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';


function Index() {
	const [pets, setPet] = useState([]);

  useEffect(() => {
    console.log("ff");
    Axios.get(`api/pets`)
      .then(result => {
        console.log(result);
        setPet(result.data);
      })
      .catch(err => console.error(err));
  },[]);

return (
    <div className="container">
      <header>
        <h1>All Pets</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Age</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {pets.map(pet => (
              <tr key={pet.id}>
                <td>
                  <a href={`/pets/${pet._id}`}>{pet.name}</a></td>
                <td>{pet.description}</td>
                <td>{pet.age}</td>
                <td>{pet.type}</td>
                <td>
                	<Link to ={`/pets/${pet._id}/edit`}>edit</Link>|
                	<Link to ={`/pets/${pet._id}/destroy`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
