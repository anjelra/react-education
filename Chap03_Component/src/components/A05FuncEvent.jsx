import React from 'react'
import { useState } from 'react';

function A05FuncEvent() {
  const [data, setData] = useState({
    name: 'NolBu',
    age: 20,
    date: '2022-11-17',
    sports: '',
    isChecked: true,
    language: ['Vue'],
    baseball: '엘지',
    four: ['엘지']
  });

  const changeData = (event) => {
    let value = event.target.name === "age" ? Number(event.target.value) : event.target.value;
    value = (event.target.name === "age" && isNaN(value)) ? 0 : value;

    const newObj = { ...data, [event.target.name]: value };
    setData(newObj);
  };

  const changeCheck = (event) => {
    setData({ ...data, [event.target.name]: !data[event.target.name] });
  };

  const changeCheckBox = (event) => {
    const value = event.target.value;

    if (data.language.includes(value)) {
      const newLang = data.language.filter((item, index) => {
        return item !== value;
      });

      setData({ ...data, language: newLang });
    } else {
      const newLang = data.language.concat(value);

      setData({ ...data, language: newLang });
    }
  };

  const changeSelector = (event) => {
    // event.target.selectedOptions 는 유사배열 이기 때문에, map을 쓸 수 없다. 
    // 따라서, 배열로 변경을 해줘야 한다.
    const elem = Array.from(event.target.selectedOptions);

    const newData = elem.map((item, index) => {
      return item.value
    });

    setData({ ...data, four: newData });

  };

  const sendData = (event) => {
    // build 될 때 포함되는 기본 이벤트 제거.
    event.preventDefault();

    // Javascript 객체로 전달
    console.log(data);

    const jsonData = JSON.stringify(data);  // Javascript 객체 => JSON Data
    console.log(jsonData)

    const javascriptData = JSON.parse(jsonData);  // JSON Data => javascript Data
    console.log(javascriptData)
  };

  return (
    <div>
      <h3>A03 Function Component Event & Form</h3>

      <form method='GET'>
        Name: {data.name}
        <input type="text" name="name" className="form-control" value={data.name} onChange={changeData} />
        Age: {data.age}
        <input type="text" name="age" className="form-control" value={data.age} onChange={changeData} />
        Date: {data.date}
        <input type="date" name="date" className="form-control" value={data.date} onChange={changeData} />

        RadioButton: {data.sports}<br />
        <div className="form-check">
          <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input" onChange={changeData}
            defaultChecked={data.sports === 'baseball'} />
          <label htmlFor="baseball" className="form-check-label">야구</label>
        </div>
        <div className="form-check">
          <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" onChange={changeData}
            defaultChecked={data.sports === 'soccer'} />
          <label htmlFor="soccer" className="form-check-label">축구</label>
        </div>
        <div className="form-check">
          <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" onChange={changeData}
            defaultChecked={data.sports === 'basketball'} />
          <label htmlFor="basketball" className="form-check-label">농구</label>
        </div>

        CheckBox One: {data.isChecked === true ? '동의' : '동의안함'}<br />
        <div className="form-check">
          <input type="checkbox" name="isChecked" className="form-check-input" defaultChecked={data.isChecked}
            onChange={changeCheck} />
          <label htmlFor="check" className="form-check-label">동의</label>
        </div>

        CheckBox: {data.language} <br />
        <div className="form-check">
          <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
            defaultChecked={data.language.includes('Angular')} onChange={changeCheckBox} />
          <label htmlFor="baseball" className="form-check-label">앵귤러</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
            defaultChecked={data.language.includes('React')} onChange={changeCheckBox} />
          <label htmlFor="react" className="form-check-label">리엑트</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
            defaultChecked={data.language.includes('Vue')} onChange={changeCheckBox} />
          <label htmlFor="vue" className="form-check-label">뷰</label>
        </div>

        SelectBox: {data.baseball}<br />
        <select name="baseball" className="form-control" value={data.baseball} onChange={changeData}>
          <option>NC</option>
          <option>두산</option>
          <option>엘지</option>
        </select>

        {/* join은 속성이니까 없어도 에러 안남. */}
        SelectBox Multi: {data.four.join(' - ')} <br />
        <select name="four" multiple size="3" className="form-control"
          value={data.four} onChange={changeSelector}>
          <option>NC</option>
          <option>두산</option>
          <option>엘지</option>
        </select>
        <br />

        <button type="submit" onClick={sendData}>SEND</button>
      </form>
    </div>
  )
}

export default A05FuncEvent;
