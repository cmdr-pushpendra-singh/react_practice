import React from 'react'

class Header extends React.Component{
    render(){
        return(
            <header className="jumbotron my-4">
                <h1 className="display-3">{this.props.title}</h1>
                <p className="lead">{ this.props.desc }</p>
                <a href="#" className="btn btn-primary btn-lg">Call to action!</a>
            </header>
        )    
    }
}

export default Header