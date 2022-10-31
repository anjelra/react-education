// npm i query-string
import React from "react";

const data = [
  { id: 1, name: "Apples", category: "Fruit", price: 1.2, expiry: 10 },
  { id: 2, name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
  { id: 3, name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
  { id: 4, name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
  { id: 5, name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
  { id: 6, name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
];

function A06Arguments() {
  return (
    <div>
      <h5>Argument Component</h5>
      <div>This is Argument Component</div>
      <br />

      <div>
        pathname: <br />
        search: <br />
        hash:
      </div>
      <br />

      <div>
        Name: <br />
        Age: <br />
        Address:
      </div>
      <br />

      <div>
        ID: <br />
        Name: <br />
        Category:
      </div>
    </div>
  );
};
export default A06Arguments;
