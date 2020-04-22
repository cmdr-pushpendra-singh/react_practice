import React, { Component } from 'react';

class RestaurentCreate extends Component {
    constructor(){
        super();
        
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null
        }
    }
    create(){
    
        fetch("http://localhost:3000/restaurent",{
            method:"Post",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
            })
        })
    }
    render() {
        return (
            <div>
                <h2>Add New Restaurent</h2>
                <br />
                <br />
                <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurent Name" /> 
                <br />
                <br />
                <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurent email" /> 
                <br />
                <br />
                <input type="text" onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurent address" /> 
                <br />
                <br />
                <input type="text" onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurent rating" /> 
                <br />                       
                <br />                       
                <br />
                <button  onClick={()=>this.create()}>Create </button>                       
            </div>
        );
    }
}

export default RestaurentCreate;