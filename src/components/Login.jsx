import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()

        this.state={
            name:null,
            password:null
        }
    }
    login(){
        fetch("http://localhost:3000/login?q="+this.state.name).then((data)=>{
            data.json().then((resp)=>{
                console.warn(resp)
                if(resp.length > 0){
                    console.warn(this.props.history.push('list'))
                }else{
                    alert("Please check username and password")
                }
            })
        })
    }
    render() {
    return (
            <div>
                <br />
                <br />
                <br />
                <label>Name</label> 

                <input type="text" name="username" placeholder="Enter Username" onChange={(event)=>this.setState({name:event.target.value})}/>
                <br />
                <br />
                <label>Name</label> 

                <input type="password" name="password" placeholder="Enter Password" onChange={(event)=>this.setState({password:event.target.value})}/>
                <br/><br/>
                <button onClick={()=>{this.login()}}>Login</button>
            </div>
        );
    }
}

export default Login;