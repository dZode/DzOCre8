import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

export default function () {
  const [techs, setTechs] = useState(null);

  useEffect(() => {
    axios
      .get("/api/techs")
      .then((response) => setTechs(response.data))
      .catch(console.log);
  }, []);

  function handleDelete(id) {
    axios
      .delete("api/techs/" + id)
      .then(() => setTechs(techs.filter((tech) => tech.id !== id)));
  }

  if (techs == null) return "Loading...";

  return (
    <div>
      <h1>Technology</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {techs.map((tech, idx) => (
            <tr key={idx}>
              <td>
                <Link to={"/techs/" + tech._id}>{tech.name}</Link>
              </td>
              <td>{tech.category}</td>
              <td>{tech.description}</td>
              <td>
                <button
                  onClick={() => navigate("/techs/" + tech._id + "/edit")}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(tech._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
