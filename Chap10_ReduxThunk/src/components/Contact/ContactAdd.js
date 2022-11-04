
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'

function AddContact() {
    const [contact, setContact] = useState({ name: '', tel: '', address: '' });
    const changeText = evt => setContact({ ...contact, [evt.target.name]: evt.target.value })

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addContact = () => {
        navigate('/getContactList');
    }

    return (
        <div>
            <h3>Add Contact</h3>

            Name: <input type="text" className="form-control" name="name"
                value={contact.name} onChange={changeText} />
            Tel: <input type="text" className="form-control" name="tel"
                value={contact.tel} onChange={changeText} />
            Address: <input type="text" className="form-control" name="address"
                value={contact.address} onChange={changeText} />
            <br />
            <button className="btn btn-outline-primary" onClick={addContact}>ADD</button>
        </div>
    )
}

export default AddContact
