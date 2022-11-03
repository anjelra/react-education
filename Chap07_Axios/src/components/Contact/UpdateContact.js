import React from "react";

function AddContact(props) {
  const { contact, changeString, updateContact } = props;

  return (
    <div>
      <h3>Update Contact</h3>

      <div>
        Name: <input type="text" className="form-control" name="name"
          value={contact.name} onChange={changeString} />
        Tel: <input type="text" className="form-control" name="tel"
          value={contact.tel} onChange={changeString} />
        Address: <input type="text" className="form-control" name="address"
          value={contact.address} onChange={changeString} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => updateContact(contact.no)}>UPDATE</button>
    </div>
  );
}
export default AddContact;
