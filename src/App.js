import React from 'react';
import './App.css';
// import Counter from "./session-2/counter.jsx"
// import Forms from "./session-3/Forms.js"
// import ThForm from './session-2/thForm';
import LifeCycleComponent from "./session-4/lifecycleComponents.jsx"

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      showCounter : true
    }
  }
  btnManage = () => {
    this.setState((prevState)=>({
      showCounter:!prevState.showCounter
    }))
  }

  render() {
    return (
      <div className="App">
      {/* adding form component tag */}
      {/* <Forms /> */}

      {/* giving properties to child class */}
      {/* this is the component tag, when ever react read this, the entire code of that component will get replace by tag */}
      
      {/* <Counter diff={1}/>
      <Counter diff={10}/> */}

      {/* take home Form */}
      {/* <ThForm/> */}

      {/* <LifeCycleComponent /> */}

      {/* to demonstrate the componentWillUnmount() */}
      <button id="componentMng" onClick={this.btnManage}>Show/Hide Component</button>
      {this.state.showCounter?<LifeCycleComponent/>:null}
    </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       {/* adding form component tag */}
//       {/* <Forms /> */}

//       {/* giving properties to child class */}
//       {/* this is the component tag, when ever react read this, the entire code of that component will get replace by tag */}
      
//       {/* <Counter diff={1}/>
//       <Counter diff={10}/> */}

//       {/* take home Form */}
//       {/* <ThForm/> */}

//       <LifeCycleComponent />
//     </div>
//   );
// }

export default App;
