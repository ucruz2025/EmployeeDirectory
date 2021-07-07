import React, { Component } from "react";
import Table from "./Table";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/Data.css";

class Data extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    headings = [
        {name: "Image", width: "10%"},
        {name: "Name", width: "10%"},
        {name: "Phone", width: "20%"},
        {name: "Email", width: "20%"},
        {name: "DOB", width: "10%"},
    ]

    handleSort = heading => {
        if(this.state.order === "decend") {
            this.setState({order: "ascend"})
        } else{
            this.setState({order: "decend"})
        }

        const compareFnc = (a, b) => {
            if(this.state.order === "ascend") {
                if(a[heading] === undefined) {
                    return 1;
                } else if(b[heading] === undefined) {
                    return -1;
                }

                else if(heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            } else {
                if(a[heading] === undefined) {
                    return 1;
                } else if(b[heading] === undefined) {
                    return -1;
                }

                else if(heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }
        }

        const sortedUsers = this.state.filteredUsers.sort(compareFnc);
        this.setState({filteredUsers: sortedUsers});
    }

    handleSearchChange = (event) => {
        console.log(event.target.value);
        const filter = event.target.vaule;
        const filteredList = this.state.users.filter(item => {
            let value = Object.values(item).join("").toLowerCase();
            return value.indexOf(filter.toLowerCase()) !== -1;
        });

        this.setState({filteredUsers: filteredList});
    }

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
        return (
            <>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area">
                    <Table
                        headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    />
                </div>
            </>
        );
    }
}

export default Data;