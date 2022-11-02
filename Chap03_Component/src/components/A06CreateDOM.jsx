import React, { useState } from "react";
import { useRef } from "react";

function A06CreateDOM() {
  const baseArray = ["NC", "두산", "엘지", "KT", "키움"];

  const [baseObject, setBaseObject] = useState([
    { id: 1, team: "NC", value: "NC" },
    { id: 2, team: "두산", value: "Doosan" },
    { id: 3, team: "엘지", value: "LG" },
  ]);

  const [data, setData] = useState({
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
  });

  // useState와 동일하게 값이 유지된다. 다만, 화면 갱신에 관련된 작업은 하지 않는다.
  const cnt = useRef(0);
  const changeValue = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });
  const addTeam = () => setBaseObject(baseObject.concat(
    // useRef는 current 라는 속성을 가지고 있다. 따라서 current를 붙여야 한다.
    {
      id: cnt.current++,
      team: "삼성",
      value: "Samsung"
    })
  );
  const showHide = () => setData({ ...data, isChecked: !data.isChecked });

  const changeTeam = (evt) => setData({ ...data, team: evt.target.value });
  const addBaseArray = () => {
    baseArray.push(data.team);
    // forceUpdate();               // 지원하지 않음. useState 사용
  }

  const makeOption = () => {
    return baseObject.map(item => <option value={item.value} key={item.id}>{item.team}</option>);
  };

  return (
    <div>
      <h3>A04 Make DOM</h3>
      SelectBox: {data.teamOne}
      <br />
      <select name="teamOne" className="form-control" onChange={changeValue}>
        <option>선택해주세요</option>
        {/* for문을 쓸 수 없다. 결국 return해주는 객체는 map뿐.
            가상돔을 만들 때에는 반드시 key를 넣어줘야 한다. */}
        {baseArray.map((item, index) => <option key={index}>{item}</option>)}
      </select>

      SelectBox: {data.teamTwo}
      <br />
      <select name="teamTwo" className="form-control" onChange={changeValue}>
        <option value="">선택해주세요</option>
        {makeOption()}
      </select>

      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Team</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {baseObject.map(item =>
          (<tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.team}</td>
            <td>{item.value}</td>
          </tr>)
          )}
        </tbody>
      </table>
      <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
      <br />
      <br />

      {/* 앞에꺼가 실행되어야만 다음꺼가 실행된다. */}
      {data.isChecked &&
        <div className="input-group">
          <input type="text" className="form-control" value={data.team} onChange={changeTeam} />
          <button className="btn btn-outline-primary btn-sm" onClick={addBaseArray}>ADD</button>
        </div>
      }
      <br />

      <button className="btn btn-outline-primary btn-sm" onClick={showHide}>
        {data.isChecked ? "HIDE" : "SHOW"}
      </button>
    </div>
  );
}
export default A06CreateDOM;
