import React, { Component } from 'react';

class RestaurentUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null,
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/restaurent/'+this.props.match.params.id)
        .then((response)=>{
            response.json().then((result)=>{
                console.warn(result)
                this.setState({
                    id:result.id,
                    name:result.name,
                    email:result.email,
                    address:result.address,
                    rating:result.rating

                })
            })
        })
    }
    update(){

        fetch("http://localhost:3000/restaurent/"+this.state.id,{
            method:"put",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                // console.warn(resp)
                alert("Data Update")
            })
        })
    }
    render() {
        console.warn(this.props.match.params.id)
        return (
            <div>
                <h3>Update</h3>
                <br />
                <br />
                <input type="text" value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurent Name" /> 
                <br />
                <br />
                <input type="text" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurent email" /> 
                <br />
                <br />
                <input type="text" value={this.state.address} onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurent address" /> 
                <br />
                <br />
                <input type="text" value={this.state.rating} onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurent rating" /> 
                <br />                       
                <br />                       
                <br />
                <button  onClick={()=>this.update()}>Update</button>                       
            
            </div>
        );
    }
}

export default RestaurentUpdate;