import React from 'react'
import axios from 'axios'

class ThForm extends React.Component {
    constructor() {
        super()
        this.state = {
            fN:"",
            lN:"",
            email:"",
            photo:"https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
            altName:"profile-photo"
        }
    }

    showData = async(e) =>{
        let data;

        try {
            let response = await axios.get("https://reqres.in/api/users/"+e.target.value);
            data = response.data.data;
            console.log(data)
            this.setState((prevState)=>({
                fN: data.first_name,
                lN: data.last_name,
                email: data.email,
                photo: data.avatar
            }))
        }catch (error) {
            this.setState(()=>({
                fN: "",
                lN: "",
                email:"",                
                photo:"",
                altName:"Not available"
            }))
            alert("Failed to fetch data")
        }


    }

    render() {
        return (
            <div>
                <button value="1" onClick={this.showData}>1</button>
                <button value="2">2</button>
                <button value="3">3</button>
                <button value="100" onClick={this.showData}>100</button>
                
                <ul>
                    <li>Email: {this.state.email}</li>
                    <li>Name: {this.state.fN+" "+this.state.lN}</li>    
                </ul>

                <img src={this.state.photo} alt={this.state.altName} />             
            </div>
        )
    }
}

export default ThForm