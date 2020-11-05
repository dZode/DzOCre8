import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SingleTech({ id }) {
  const [techData, setTechData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/techs/" + id)
      .then((response) => setTechData(response.data))
      .catch(console.log);
  }, [id]);

  if (techData == null) return "Loading...";

  return (
    <div>
      <h1>{techData.name}</h1>
      <p>Category: {techData.category}</p>
      <p>Description: {techData.description}</p>
      <img src={techData.image1} alt={techData.name} />
    </div>
  );
}
