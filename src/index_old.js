// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import './components/css/bootstrap.css';
import './components/css/heroic-features.css';
import Menubar from './components/menubar';
import Body from './components/body';

import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/footer'

class Test extends React.Component{
	
	constructor(props){
		super(props)

		this.state={
			name: this.props.name,
			count: this.props.count,

		}

		this.clickMe = this.clickMe.bind(this);

	}

	clickMe() {
		let count = this.state.count
		this.setState({count: ++count }) 

	}

	render(){
		return (
			<div>
				<h3>Name ={this.state.name}</h3>
				<h3>Count ={this.state.count}</h3>

				<button onClick={ this.clickMe }>Click</button>
			</div>
		)
	}
}


ReactDOM.render(<Test name="tet" count="0"/>,document.getElementById('root') )



// ReactDOM.render(

	

// 		<div>
// 			<Menubar />
// 			<Body />
// 			<Footer />
// 		</div>
// 	,
// 	document.getElementById('root')
// )



/// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more abnaout service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// // function loginUser(user) {
// // 	if(user)
// // 		return user.name +' '+ user.lname;
// // 	else
// // 		return "Guest"
// // }
// // const user = {
// // 	name : 'Pushpendra',
// // 	lname : 'Singh'

// // }

// // class Test extends React.Component{
	
// // 	render(){
// // 		return(<div><h1>Hi, {this.props.name} </h1></div>)
// // 	}
// // }

// // function Composing(){
// // 	return (
// // 			<div>
// // 			 <Test name="com1"/>
// // 			 <Test name="com2"/>
// // 			 <Test name="com3"/>
// // 			 <Test name="com4"/>
// // 			 <Test name="com5"/>
// // 			</div>
// // 		)
// // }
	
// // ReactDOM.render(<Composing />,  document.getElementById('root'))	



