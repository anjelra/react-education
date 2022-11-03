import React from "react";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const data = [
  { id: 1, name: "Apples", category: "Fruit", price: 1.2, expiry: 10 },
  { id: 2, name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
  { id: 3, name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
  { id: 4, name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
  { id: 5, name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
  { id: 6, name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
];

function A05MatchParam() {
  // App.jsx에서 호출한 파라미터는 useParams로 호출할 수 있다.
  const params = useParams();
  // 주소줄 전체에 관련된 거는 useLocation.
  const location = useLocation();

  const product = data.find(item => item.id === Number(params.id));

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div>
      <h5>Parameter Component</h5>
      <div>This is Parameter Component</div>
      <br />

      <div>
        Id: {params.id} <br />
        Name: {params.name} <br />
        {/* location.pathname 이 한글인 경우도 있으니, decodeURIComponent로 디코딩 처리 해주기! */}
        Location: {decodeURIComponent(location.pathname)}
      </div>
      <br />

      <div>
        Id: {product.id} <br />
        Name: {product.name}<br />
        Category: {product.category}
      </div>
    </div>
  );
};
export default A05MatchParam;
