import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContactAction } from "../../modules/contactR";

function AddContact() {
  const { loading, error, contact } = useSelector((state) => state.contactR);
  const dispatch = useDispatch();

  // App.jsx에서 호출한 파라미터는 useParams로 호출할 수 있다.
  const params = useParams();

  useEffect(() => {
    dispatch(getContactAction(Number(params.no)));
  }, [dispatch, params]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>점검중...</div>;

  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name:{" "}
        <input
          type="text"
          className="form-control"
          disabled
          defaultValue={contact && contact.name}
        />
        Tel:{" "}
        <input
          type="text"
          className="form-control"
          disabled
          defaultValue={contact && contact.tel}
        />
        Address:{" "}
        <input
          type="text"
          className="form-control"
          disabled
          defaultValue={contact && contact.address}
        />
      </div>
      <br />
      <button className="btn btn-outline-primary">수정</button>
      <button className="btn btn-outline-primary">삭제</button>
    </div>
  );
}

export default AddContact;
