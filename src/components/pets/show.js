import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [pet, setPet] = useState({});

  useEffect(() => {
    Axios.get(`/api/pets/${props.match.params.id}`)
      .then(result => setPet(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{pet.name}</h1>
      </header>

      <div>
        {pet.description}
      </div>
      <div>
        {pet.age}
      </div>
      <div>
        {pet.type}
      </div>

    </div>
  );
}

export default Show;