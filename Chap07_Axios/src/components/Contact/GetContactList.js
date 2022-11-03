import React from "react";
import { Link } from "react-router-dom";

function GetContactList(props) {
  const { contactList, getContact } = props;

  const viewContact = no => {
    getContact(no);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {contactList.contacts && contactList.contacts.map(item => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td><Link to="" onClick={() => viewContact(item.no)}>{item.name}</Link></td>
              <td>{item.tel}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GetContactList;
