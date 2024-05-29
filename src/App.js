import React from 'react';
import './App.css';
import Testing from "./practice/testing.jsx"
// import Counter from "./session-2/counter.jsx"
// import Forms from "./session-3/Forms.js"
// import ThForm from './session-2/thForm';
// import LifeCycleComponent from "./session-4/lifecycleComponents.jsx"
// import BookAppointment from './session-4/BookAppointment_th.jsx';
// import DogPics from "./session-3/thDogPics.jsx";
// import Fc_1 from "./session-4/functionComponent.jsx"
// import Counter_useEffect from "./session-5/useEffect.jsx"
// import AlbumApp from './session-5/albumApp.jsx';
// import AlbumApp_RR from './session-6/albumApp-RR.jsx'
// import Home from './session-6/home-RR.jsx'
// import UseRefExplain from './session-7/useRef.jsx'
// import LearningMaterialUi from './session-7/materialUi.jsx'
// import TableGenerateTask from "./session-7/table-task.jsx"
// import DebouncingImplementation from './session-8/debouncing-2.jsx';
import Home from './session-10_(Pagination)/home.jsx'


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

      {/* ======> Testing-practice <======*/}
      {/* <Testing/>       */}

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
      
      {/* <button id="componentMng" onClick={this.btnManage}>Show/Hide Component</button>
      {this.state.showCounter?<Counter_useEffect diff={10}/>:null} */}

      {/* Album application */}
      {/* <AlbumApp/> */}


      {/* ======> session-6 (react-router) * <====== */}

      {/* insted of calling main component (landing page) we called <Home/> component it will decide the 
          which compoenent to load on which path (route)
          
          example:
          / -> <AlbumApp_RR.jsx/>
          /photos/albumId -> <PhotoApp_RR.jsx/>
      */}
      {/* <Home/> */}


      {/* ======> session-7 (useRef, Material-Ui, Debouncing (part-1), 1 problem) * <====== */}

      {/* <UseRefExplain/> */}
      {/* <LearningMaterialUi/> */}

      {/* <TableGenerateTask/> */}


      {/* ======> session-8 (Debouncing (part-2), Qkart module-1 discuss, How to think, when to use useState, useEffect.) * <====== */}

      {/* <DebouncingImplementation/> */}


      {/* ======> session-9 (Redux (part-1), Theory) * <====== */}

      {/* <DebouncingImplementation/> */}


      {/* ======> session-10 (Pagination) * <====== */}

      <Home/>

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
