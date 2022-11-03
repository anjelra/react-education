// npm i query-string (search의 각 파라미터들을 짜를 수 있는 패키지.)
import React from "react";
import { useLocation } from "react-router-dom";
import qs from 'query-string';

const data = [
  { id: 1, name: "Apples", category: "Fruit", price: 1.2, expiry: 10 },
  { id: 2, name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
  { id: 3, name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
  { id: 4, name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
  { id: 5, name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
  { id: 6, name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
];

function A06Arguments() {
  // 주소줄 전체에 관련된 거는 useLocation.
  const location = useLocation();
  // console.log(location);

  const query = qs.parse(location.search);
  // console.log("query", query);
  const product = data.find(item => item.id === Number(query.id));

  return (
    <div>
      <h5>Argument Component</h5>
      <div>This is Argument Component</div>
      <br />

      <div>
        pathname: {location.pathname} <br />
        search: {location.search} <br />
        hash: {location.hash}
      </div>
      <br />

      <div>
        Name: {query.name} <br />
        Age: {query.id}<br />
        Address: {query.address}
      </div>
      <br />

      <div>
        ID: {product.id}<br />
        Name: {product.name}<br />
        Category: {product.category}
      </div>
    </div>
  );
};
export default A06Arguments;
