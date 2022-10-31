
import React from 'react'
import { Link } from 'react-router-dom';

const GetContactList = () => {

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
                    <tr>
                        <td></td>
                        <td><Link to="#"></Link></td>
                        <td></td>
                        <td></td>
                    </tr>            
                </tbody>
            </table>
        </div>
    )
}

export default GetContactList
