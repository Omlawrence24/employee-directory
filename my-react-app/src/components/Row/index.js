import React from "react";

function Row(props) {
    return (
        <tr>
             <td>#</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.age}</td>
            <td>{props.email}</td>

        </tr>
    )
};

export default Row;
