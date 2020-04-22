import React, { Component } from 'react';

import {  Route, Link } from 'react-router-dom'

class RestaurentList extends Component {
    constructor(){
        super()
        this.state={
            list:null,
            searchData:null
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
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
    delete(id){   
        fetch("http://localhost:3000/restaurent/"+id,{
            method:"delete"
        }).then((result)=>{
            result.json().then((resp)=>{
                // console.warn(resp)
                alert("Data deletey")
                this.getData()
            })
        })
    
    }
    search(k){
        fetch("http://localhost:3000/restaurent/q="+k).then((data)=>{
            data.json().then((resp)=>{
                // console.warn(resp)
                this.setState({
                    list:null,
                    searchData:resp
                })
            })
        })


    }
    render() {
        console.warn(this.state)
        return (
            <>
            <div >
                <a className="btn" href="/create">Add New restaurent</a>
                <br></br>
                <input type="text" placeholder="Search Restaurent" onChange={(event)=>this.search(event.target.value)}/>
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
                                 <td>
                                     <Link to={"/update/"+item.id}>Edit</Link>
                                    <button onClick={()=>this.delete(item.id)}>Delete</button>
                                 </td>
                            </tr>
                           
                        )}
                    </table>
                    :<p>Please wait</p>
                }

            </div>
            </>
        );
    }
}

export default RestaurentList;