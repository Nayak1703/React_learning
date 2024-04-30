import React from 'react';
import './App.css';
// import Counter from "./session-2/counter.jsx"
// import Forms from "./session-3/Forms.js"
// import ThForm from './session-2/thForm';
// import LifeCycleComponent from "./session-4/lifecycleComponents.jsx"
// import DogPics from "./session-3/thDogPics.jsx";
// import Fc_1 from "./session-4/functionComponent.jsx"
import Counter_useEffect from "./session-5/useEffect.jsx"


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

      {/* ======> session-2 * <====== */}
      
      {/* giving properties to child class */}
      {/* this is the component tag, when ever react read this, the entire code of that component will get replace by tag */}

      {/* <Counter diff={1}/>
      <Counter diff={10}/> */}

      {/* take home Form */}
      {/* <ThForm/> */}


      {/* ======> session-3 * <====== */}

      {/* adding form component tag */}
      {/* <Forms /> */}

      {/* take home dogs-pics */}
      {/* <DogPics/> */}
     

      {/* ======> session-4 * <====== */}

      {/* learned about component lifecycle and it method */}
      {/* <LifeCycleComponent /> */}

      {/* to demonstrate the componentWillUnmount() */}
      {/* <button id="componentMng" onClick={this.btnManage}>Show/Hide Component</button>
      {this.state.showCounter?<LifeCycleComponent/>:null} */}


      {/* functional components */}
      {/* <Fc_1 name={"yash"} diff={10}/> */}

      {/* take home activity of session-4, BookAppointment */}
      {/* <BookAppointment/> */}


      {/* ======> session-5 * <====== */}

      {/* to demonstrate the componentWillUnmount() using useEffect*/}
      {/* flow -> onClick -> btnManage -> change-the-state -> render() -> ternery-operator -> 
      check-wheater-component-have-useEffect()-variation-4 -> if yes execute useEffect() -> then come back to app.js -> execute null*/}
      <button id="componentMng" onClick={this.btnManage}>Show/Hide Component</button>
      {this.state.showCounter?<Counter_useEffect diff={10}/>:null}
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
