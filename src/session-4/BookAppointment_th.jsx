import React, { useState } from 'react';
import axios from 'axios';


const BookAppointment = (props, ref) => {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [doctor, setDoctor] = useState(false)
    const [formSubmitted, setForm] = useState(false)
    const [formSubCanBtn, setSubBtn] = useState(false)



    const docInput = (e) => {
        if (e.target.value !== "")
            setDoctor(e.target.value)
        else
            setDoctor("")
    }

    const fnInput = (e) => {
        setFName((prevState) => prevState = e.target.value)
    }

    const lnInput = (e) => {
        setLName((prevState) => prevState = e.target.value)
    }

    const emailInput = (e) => {
        setEmail((prevState) => prevState = e.target.value)
    }

    const sentData = async () => {
        const data = {
            firstName: fName,
            lastName: lName,
            email: email,
            doctor: doctor
        }
        try {
            setForm(true);
            await axios.post("https://jsonplaceholder.typicode.com/posts", data);
            setForm(false);
            setSubBtn(true)
        }
        catch (error) {
            alert("Error", error)
        }
    }
let formCode =  <form onSubmit={(e) => {
    e.preventDefault()
    sentData();
}}>
    <p><strong>Basic Info</strong></p>
    <label className='formInputs'>
        First Name
        <input type="text" value={fName} required onChange={fnInput} />
    </label>
    <label className='formInputs'>
        Last Name
        <input type="text" value={lName} required onChange={lnInput} />
    </label>
    <label className='formInputs'>
        Email
        <input type="email" value={email} required onChange={emailInput} />
    </label>
    <br />
    <p><strong>Doctor</strong></p>

    <select className='formInputs' name="doctors" id="doctors" onChange={docInput}>
        <option value="">Select your doctor</option>
        <option value="krsna">Dr. Krsna</option>
        <option value="radha">Dr. Radha</option>
        <option value="sita-ram">Dr. SitaRam</option>
        <option value="yash-nayak">Dr. Yash Nayak</option>
    </select>

    {doctor && <div>
        <p><strong>Where?</strong></p>
        <label className='formInputs'>
            <input type="radio" name="platform" value="google_meet" />
            Google Meet</label>
        <label className='formInputs'>
            <input type="radio" name="platform" value="phone" />
            Phone</label>
        <p><strong>When?</strong></p>
        <input type="datetime-local" required className='formInputs' />
    </div>}


    <input type="submit" value="confirm booking" />
</form>






    return (
        <div>
            <div id="formHeading">
                <h1>Book a session</h1>
                <p>Fill in the form to book the virtual session with your doctor </p>
            </div>
            {formSubmitted?<h2>Scheduling the appointment...</h2>:formCode}
            {formSubCanBtn?formCode="" && <button>Cancel appointment</button>:""}
        </div>
    )
}
export default BookAppointment;