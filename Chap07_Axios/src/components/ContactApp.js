import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

import ContactHeader from "./Contact/ContactHeader";
import ContactHome from "./Contact/ContactHome";
import AddContact from "./Contact/AddContact";
import UpdateContact from "./Contact/UpdateContact";
import GetContact from "./Contact/GetContact";
import GetContactList from "./Contact/GetContactList";

function ContactApp() {
  const baseURL = "http://localhost:5000/contacts/";
  const navigate = useNavigate();

  const [contactList, setContactList] = useState({
    pageno: "",
    pagesize: "",
    totalcount: "",
    contacts: [],
  });
  const [contact, setContact] = useState({
    no: "",
    name: "",
    tel: "",
    address: "",
    photo: "",
  });

  const getContactList = useCallback(async () => {
    try {
      const resp = await axios.get(baseURL, {
        params: { pageno: 1, pagesize: 10 },
      });
      setContactList(resp.data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getContact = useCallback(
    async (no) => {
      try {
        const resp = await axios.get(baseURL + no);
        setContact(resp.data);
        navigate("/getContact");
      } catch (err) {
        console.error(err);
      }
    },
    [navigate]
  );

  const deleteContact = useCallback(
    async (no) => {
      try {
        await axios.delete(baseURL + no);
        navigate("/getContactList");
        getContactList();
      } catch (err) {
        console.error(err);
      }
    },
    [navigate, getContactList]
  );

  const goUpdate = useCallback(() => {
    navigate("/updateContact");
  }, [navigate]);

  const changeString = useCallback((evt) => {
    setContact((contact) => ({
      ...contact,
      [evt.target.name]: evt.target.value,
    }));
  }, []);

  // contact 수정.
  const updateContact = useCallback(
    async (no) => {
      try {
        await axios.put(baseURL + no, contact);
        navigate("/getContactList");
        getContactList();
      } catch (err) {
        console.error(err);
      }
    },
    [navigate, getContactList, contact]
  );

  // contact 추가.
  const addContact = useCallback(
    async (contact) => {
      try {
        await axios.post(baseURL, contact);
        navigate("/getContactList");
        getContactList();
      } catch (err) {
        console.error(err);
      }
    },
    [navigate, getContactList]
  );

  useEffect(() => {
    getContactList();
  }, [getContactList]);

  return (
    <div>
      <ContactHeader />
      <br />

      <Routes>
        <Route path="/" element={<ContactHome />} />
        <Route
          path="/getContactList"
          element={
            <GetContactList contactList={contactList} getContact={getContact} />
          }
        />
        <Route
          path="/getContact"
          element={
            <GetContact
              contact={contact}
              deleteContact={deleteContact}
              goUpdate={goUpdate}
            />
          }
        />
        <Route
          path="/addContact"
          element={
            <AddContact
              contact={contact}
              // setContact를 넘겨주는 이유는, 해당 값을 통해 해당 컴포넌트에서 초기화를 해줘야 하기 때문에.
              // 이유는, 리스트에서 한건 선택한 후에, Add Contact를 누르게 되면, 값이 남아 있기 때문에.
              setContact={setContact}
              changeString={changeString}
              addContact={addContact}
            />
          }
        />
        <Route
          path="/updateContact"
          element={
            <UpdateContact
              contact={contact}
              changeString={changeString}
              updateContact={updateContact}
            />
          }
        />
        <Route path="*" element={<h3>Not Found</h3>} />
      </Routes>
    </div>
  );
}
export default ContactApp;
