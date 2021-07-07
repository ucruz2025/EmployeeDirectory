import React from "react";
import DataCard from "./DataCard";
import "../styles/Table.css";

function Table({ heading, users, handleSort }) {
    return (
        <div className="datatable mt-5">
            <table className="table table-striped table-hover table-condensed" id="table">
                <thread>
                    <tr>
                        {headings.map(({name, width}) => {
                            return (
                                <th 
                                    className="col"
                                    key={name}
                                    style={{width}}
                                    onClick={() => {
                                        handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            )
                        })}
                    </tr>
                </thread>
                <DataCard users={users}/>
            </table>
        </div>
    )
}

export default Table;