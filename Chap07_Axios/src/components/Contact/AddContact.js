import React, { useEffect } from "react";

function AddContact(props) {
  const { contact, changeString, addContact, setContact } = props;

  // dom이 로드되자 마자 할 일은, 인풋 값 초기화.
  useEffect(() => {
    setContact({
      no: "",
      name: "",
      tel: "",
      address: "",
      photo: "",
    });
  }, [setContact]);
  return (
    <div>
      <h3>Add Contact</h3>
      Name:{" "}
      <input
        type="text"
        className="form-control"
        name="name"
        value={contact && contact.name}
        onChange={changeString}
      />
      Tel:{" "}
      <input
        type="text"
        className="form-control"
        name="tel"
        value={contact && contact.tel}
        onChange={changeString}
      />
      Address:{" "}
      <input
        type="text"
        className="form-control"
        name="address"
        value={contact && contact.address}
        onChange={changeString}
      />
      <br />
      <button
        className="btn btn-outline-primary"
        onClick={() => addContact(contact)}
      >
        ADD
      </button>
    </div>
  );
}

export default AddContact;
