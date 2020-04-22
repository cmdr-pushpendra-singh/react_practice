import React, { Component } from 'react';

import {  Route, Link } from 'react-router-dom'

class RestaurentList extends Component {
    constructor(){
        super()
        this.state={
            list:null
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restaurent").then((response)=>{
            response.json().then((result)=>{
                this.setState(
                        {
                            list:result
                        }
                    )
            })
        })
    }
    render() {
        console.warn(this.state)
        return (
            <div >
                <a className="btn" href="/create">Add New restaurent</a>
                <h2>List</h2>
                {
                    this.state.list?
                    <table>
                        <tr>
                            <td>S.No</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Rating</td>
                            <td>Address</td>
                            <td></td>
                        </tr>
                        {this.state.list.map((item,i)=>
                            <tr>
                                 <td>{item.id}</td>
                                 <td>{item.name}</td>
                                 <td>{item.email}</td>
                                 <td>{item.rating}</td>
                                 <td>{item.address}</td>
                                 <td><Link to={"/update/"+item.id}>Edit</Link></td>
                            </tr>
                           
                        )}
                    </table>
                    :<p>Please wait</p>
                }
            </div>
        );
    }
}

export default RestaurentList;