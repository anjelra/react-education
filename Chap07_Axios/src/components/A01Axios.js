import React, { useState } from "react";

// npm i axios
import axios from 'axios'

function A01Axios() {
  const baseURL = "http://localhost:5000/contacts/";

  const [data, setData] = useState();

  const getContactList = () => {
    // GET 방식 요청
    axios.get(baseURL)
      .then(resp => {
        // console.log(resp.data);
        setData(JSON.stringify(resp.data, '', 4))

        return axios.get(baseURL)
      })
      .then(resp => console.log(resp.data))
      .catch(error => {
        setData(error)
      })
  }

  const getContactListAsync = async () => {
    try {
      // await => 결과가 리턴될때까지 여기서 대기. 데이터가 오지 않으면 아래 구문이 실행 안됨
      const resp1 = await axios.get(baseURL + "?pageno=2&pagesize=10");
      setData(JSON.stringify(resp1.data, '', 4))

      const resp2 = await axios.get(baseURL + "?pageno=3&pagesize=10");
      console.log(JSON.stringify(resp2.data, '', 4))
    } catch (err) {
      console.error(err);
    }
  }

  const getContact = (no) => {
    /*
    axios.get(baseURL + no)
      .then(resp => {
        setData(JSON.stringify(resp.data, '', 4))
      })
      .catch(error => {
        setData(error)
      })
    */
    axios({
      method: 'get',
      url: baseURL + no,
      headers: { 'Content-Type': 'application/json' },    // header 정보가 필요한 경우
      data: '',                                         // 서버에 전달할 값
    })
      .then(resp => {
        setData(JSON.stringify(resp.data, '', 4))
      })
      .catch(error => {
        setData(error)
      })
  }

  const addContact = () => {
    const person = {
      "name": "강감찬",
      "tel": "010-2222-3339",
      "address": "서울시"
    };

    axios.post(baseURL, person)
      .then(resp => {
        setData(JSON.stringify(resp.data, '', 4))
      })
      .catch(error => {
        setData(error)
      })
  }

  const updateContact = no => {
    const person = {
      "no": no,
      "name": "이순신",
      "tel": "010-1111-3339",
      "address": "서울시"
    };

    axios.put(baseURL + no, person)
      .then(resp => {
        setData(JSON.stringify(resp.data, '', 4))
      })
      .catch(error => {
        setData(error)
      })
  }

  const deleteContact = no => {
    axios.delete(baseURL + no)
      .then(resp => {
        setData(JSON.stringify(resp.data, '', 4))
      })
      .catch(error => {
        setData(error)
      })
  }


  return (
    <div>
      <h3>A01 Axios GET</h3>
      <button onClick={getContactList}>DATA LIST</button>
      <button onClick={getContactListAsync}>DATA LIST ASYNC</button>
      <button onClick={() => getContact(90)}>GET</button>
      <button onClick={addContact}>ADD</button>
      <button onClick={() => updateContact(1667458802375)}>UPDATE</button>
      <button onClick={() => deleteContact(1667458802535)}>DELETE</button>
      <br />
      <br />

      <textarea cols="100" rows="15" defaultValue={data}></textarea>
    </div>
  );
}
export default A01Axios;
