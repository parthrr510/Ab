import React from 'react';
import "./Entry.css";

const Entry = (props) =>{
    return(
        <div className="table-content">
            <table>
                <tr>
                    <td> {props.item.continent} </td>
                    <td> {props.item.team_name} </td>
                    <td> {props.item.rank} </td>
                    <td> {props.item.resources} </td>
                </tr>
            </table>
        </div>
    )
}

export default Entry;