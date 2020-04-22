import React from 'react'

class Feature extends React.Component{
    render(){
        return(
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <img className="card-img-top" src="http://placehold.it/500x325" alt="" />
                <div className="card-body">
                  <h4 className="card-title">{this.props.title}</h4>
                  <p className="card-text">{ this.props.desc }</p>
                </div>
                <div className="card-footer">
                  <a href="{ this.props.link }" className="btn btn-primary">Find Out More!</a>
                </div>
              </div>
            </div>
      
        )    
    }
}

export default Feature