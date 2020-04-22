import React from 'react'
import  Header  from './header'
import  Feature  from './feature'
class Body extends React.Component{
    render(){
        return(
            <div className="container">
            <Header title="Offer 1" desc="This offer valid till 31st" />
              <div className="row text-center">
                <Feature title="Feature 1" desc="This is sample text" link="" />
                <Feature title="Feature 2" desc="This is sample text" link="" />
                <Feature title="Feature 3" desc="This is sample text" link="" />
                <Feature title="Feature 4" desc="This is sample text" link="" />
                
                </div>
           </div>
        )    
    }
}

export default Body