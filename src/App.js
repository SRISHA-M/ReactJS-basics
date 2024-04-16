
import './App.css';

// functional components

// function Nav(){
//   return(
//     <h1>
//       this is nav bar
//     </h1>
//   )
// }

// function App() {
//   return (
//    <div className='app'>
//      <Nav/>
//     <h1>how are you!</h1>
   
//    </div>
//   );
// }



//class components
// import React from 'react';
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>hii! this is sri</h1>
//       </div>
//     )
//   }
// }


//state&props
// import React from 'react';
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       name:"srisha",age:20
//     }
//     this.sri={
//       name:"sri",age:19
//     }
//   }
//   render(){
//     return(
//       <section>
//         <h1>{this.state.name+this.state.age}</h1>
//         <h2>{this.sri.name+this.sri.age}</h2>
//       </section>
//     )
//   }
// }


//binding
// import React from 'react';
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       name:"srisha",age:20
//     }
//     this.sri={
//       name:"sri",age:19
//     }
//   }
//   Ab(){
//     this.setState({name:"sahana",age:22})
//    }
//   render(){
//     return(
//       <section>
//         <h1>{this.state.name+this.state.age}</h1>
//         <button type='button' onClick={this.Ab.bind(this)}>click</button>
//         <h2>{this.sri.name+this.sri.age}</h2>
//       </section>
//     )
//   }
// }


//class components using 3 class
// import react from 'react'
// class App extends react.Component{
//   render(){
//     return(
//       <div>
//         <College place={'salem'}/>
//         <Faculty name={'srisha'}/>
//       </div>
//     )
//   }
// }
// class College extends react.Component{
//   render(){
//     return(
//       <div>
//         <h1>welcome to our college!</h1>
//         <h2>{this.props.place}</h2>
//       </div>
//     )
//   }
// }
// class Faculty extends react.Component{
//   render(){
//     return(
//       <div>
//         <h1>
//           hiii i am srisha!
//         </h1>
//         <h2>{this.props.name}</h2>
//       </div>

//     )
//   }
// }



//using event handler
// function App(){
//   function eventHandlers(){
//     alert('hiii hellow')
//   }
//   return(
//     <div>
//       <h1>hellow every one</h1>
//       <button type='button' onClick={eventHandlers}>click</button>
//     </div>
//   )
// }



// add cart
// import React from 'react';
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       value:0
//     }
//   }
//   Ab(){
//     this.setState({value:1})
//    }
//    Aa(){
//     this.setState({value:-1})
//    }
//   render(){
//     return(
//       <section>
//         <button type='button' onClick={this.Aa.bind(this)}>click</button>
//         <p>{this.state.value}</p>
//         <button type='button' onClick={this.Ab.bind(this)}>click</button>
//       </section>
//     )
//   }
// }




//list rendering
// import React from 'react';



// function Student(props){
//   return<li>{props.name}--{props.age}</li>
// }
// function App(props){
//   const College=[
//     {name:"srisha",age:20},
//     {name:"sahana",age:22},
//     {name:"reehana",age:21}
//   ];
//   return(
//     <div>
//       <ol>
//         {College.map((std)=> <Student age={std.age}name={std.name}/>)}
//       </ol>
//     </div>
//     )
    
// }

// export default App;



//conditional rendering
// import React from 'react';

// function App(props){
//   const isLogin=props.isLogin;
//   if(isLogin){
//     return<Login/>
//   }return<Signup/>
// }
// function Login(props){
//   return <h1>LOGIN</h1>
// }
// function Signup(props){
//   return <h1>SIGNUP</h1>
// }

// export default App;




//logical &&
// import React from 'react';

// function App(){
//   return(
//     <div>
//       {
//         (10>50)&&alert('successfully runned ')
//       }
//     </div>
//   )
// }
// export default App;



//ternary
// import React from 'react';
// function App(props){
//   const login=props.login;
//   return(
//     <div>
//       {login? <Login/>:<Register/>}
//     </div>
//   )
//   function Login(props){
//     return<h1>LOGGED IN</h1>
//   }
//   function Register(props){
//     return<h1>REGISTERED</h1>
//   }
// }
// export default App;



//internal css
// import React from 'react';
// function App(props){
//   const Sri={
//     color:"blue",
//     backgroundColor:"black"
//   }
//   const hello={
//     color:"red"
//   }
//   return(
//     <div>
//       <h1 style={Sri}>SRISHA</h1>
//       <h1 style={hello}>HELLO EVERYONE!</h1>
//     </div>
//   )
// }
// export default App;


//external css
// import React, { Component } from 'react';


// class App extends React.Component{
//   render(){
//     return(
//      <div>
//       <h1>SRISHA</h1>
//       <h2>HOW ARE YOU!</h2>
//      </div>

//   );
//   }
//   }
//   export default App;



//inline css
// import React from 'react';

// function App(props){
//   return(
//     <div>
//       <h1 style={{color:"red",fontSize:"50px",backgroundColor:"yellow"}}>SRISHA</h1>
//     </div>
//   )
// }
// export default App;



//react forms

//uncontrolled components
// import React, { Component } from 'react';

// class App extends React.components{
//   constructor(props){
//     super(props)
//     this.college=this.college.bind(this);
//     this.input=React.createRef();
//   }
//   college(event){
//     alert("name nad email entered correctly");
//     event.preventDefault();
//   }
//   render(){
//     return(
//       <div>
//         <form onSubmit={this.college}>
//           <label>NAME:</label>
//           <input type="text" ref={this.input} placeholder='name' required></input>
//           <br></br><br></br>
//           <lable>EMAIL:</lable>
//           <input type="text" ref={this.input} placeholder='email' required></input>
//           <br></br><br></br>
//           <input type="submit">SUBMIT</input>

//         </form>
//       </div>
//     )
//   }
// }
// export default App;




//controled components
import React from 'react';
 class App extends React.Component{
  constructor(props){
    super(props);
    this.state={value:""};
    this.addName=this.addName.bind(this);
    this.college=this.college.bind(this);
}
  addName(event){
    alert("name entered correctly"+this.state.value)
    event.preventDefault()
  }
  
  render(){
        return(
          <div>
            <form onSubmit={this.college}>
              <label>NAME:</label>
              <input type="text" ref={this.input} placeholder='name' required></input>
              <br></br><br></br>
              <lable>EMAIL:</lable>
              <input type="text" ref={this.input} placeholder='email' required></input>
              <br></br><br></br>
              <input type="submit">SUBMIT</input>
    
            </form>
          </div>
        )
      }
    }
    export default App;