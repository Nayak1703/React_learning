import React from "react";
class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            demoName: ""
        }
    }
    
    updateName = (e) => {
        this.setState((preState) => ({
            demoName: e.target.value,
        }));
        console.log(this.state.demoName)
    }

    render() {
        return (
            <div>
                <h3>{this.state.demoName}</h3>

                <form onSubmit={(e)=>{
                    // to prevent default behaviour of form
                    e.preventDefault()
                    alert("Submit Completed")
                }}>
                    <label>Name:
                        {/* without value we are directly updtaing the dom when we are writing the text inside the input
                            but here we are assigne the value of the input with the help of onChange event*/}
                            {/* 1. when user type something then onChange event trigger and */}
                    <input id="name" type="text" name="name" placeholder="enter your name" value={this.state.demoName} onChange={this.updateName}></input>
                    </label>
                    
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Forms;
