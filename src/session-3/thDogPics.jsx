import React from "react";
import axios from "axios";

class DogPics extends React.Component {
  constructor() {
      super()
      this.state ={
        breedName:"",
        imgLink:"",
      }
  }

fetchingDogJsonRandom = async () => {
    let response = await axios.get("https://dog.ceo/api/breeds/image/random");
    let dogImgLink = response.data.message; 
    console.log(dogImgLink)
    return dogImgLink;
}

async componentDidMount(){
    let dogImgLink = await this.fetchingDogJsonRandom();
    this.setState(()=>({
        imgLink: dogImgLink
    }))
}

capturingTheBreed = async (event) => {
    if(event.target.value !=="random") {
        let response = await axios.get(`https://dog.ceo/api/breed/${event.target.value}/images/random`);
        let dogImgLink = response.data.message;
        this.setState(()=>({
            breedName: event.target.value,
            imgLink: dogImgLink
        }))
    } else if(event.target.value ==="random") {
        let response = await axios.get("https://dog.ceo/api/breeds/image/random");
        let dogImgLink = response.data.message;
        this.setState(()=>({
            breedName: "",
            imgLink: dogImgLink
        }))
    }

}


updatingImg = async () =>{
    console.log("Next",this.state.breedName)
    if(this.state.breedName !=="random" && this.state.breedName !=="") {
        let response = await axios.get(`https://dog.ceo/api/breed/${this.state.breedName}/images/random`);
        let dogImgLink = response.data.message;
        this.setState(()=>({
            imgLink: dogImgLink
        }))
    } else {
        let response = await axios.get("https://dog.ceo/api/breeds/image/random");
        let dogImgLink = response.data.message;
        console.log(dogImgLink)
        this.setState(()=>({
            imgLink: dogImgLink
        }))
    }
}

  render() {
    return (
      <div>
          <label>
            Select a breed:
            <select name="cars" id="cars" onChange={this.capturingTheBreed}>
              <option value="random">Random</option>
              <option value="beagle">Beagle</option>
              <option value="boxer">Boxer</option>
              <option value="dalmatian">Dalmatian</option>
              <option value="husky">Husky</option>
            </select>
          </label>
          <img id="dogImg" src={this.state.imgLink} alt="" />
          <button onClick={this.updatingImg}>Next</button>
      </div>
    );
  }
}
export default DogPics;
