import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getContactListAction } from "../../modules/contactR";

const GetContactList = () => {
  const { error, contactList, loading } = useSelector(
    (state) => state.contactR
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactListAction());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>점검중...</div>;

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
          {contactList &&
            contactList.contacts.map((contact) => (
              <tr key={contact.no}>
                <td>{contact.no}</td>
                <td>
                  <Link to={"/getContact/" + contact.no}>{contact.name}</Link>
                </td>
                <td>{contact.tel}</td>
                <td>{contact.address}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetContactList;
