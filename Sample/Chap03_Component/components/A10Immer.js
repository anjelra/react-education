import React, { useState } from "react";

function A08Immer() {
  const [person, setPerson] = useState({
    name: "",
    info: {
      address: "",
      tel: [10, 20, 30],
      etc: {
        one: "",
        two: "",
      },
    },
  });

  return (
    <div>
      <h3>A08. Immer</h3>

      Name: {person.name}
      <br />

      Address: {person.info.address}
      <br />

      One: {person.info.etc.one}
      <br />

      Ary:{" "}
      {person.info.tel.map((item, i) => (
        <span key={i}>{item} </span>
      ))}
      <br />

      <button>Name</button>
      <button>Address</button>
      <button>One</button>
      <button>ADD</button>
      <br />

      <button>Name</button>
      <button>Address</button>
      <button>One</button>

      <button>ADD</button>
      <button>UPDATE</button>
      <button>DELETE</button>
    </div>
  );
}
export default A08Immer;
