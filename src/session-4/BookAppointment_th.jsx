import React, { useState } from "react";
import axios from "axios";
import "./bookAppointment.css";

const BookAppointment = () => {
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    doctorName: "",
    location: "",
    timing: "",
  });

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function formHandler(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        info
      );
      setFormSubmitted(true);
      console.log(response);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {formSubmitted ? (
        <div className="cancle-div">
          <h1>Appointment Booked Successfully</h1>
          <button
            onClick={() => {
              setFormSubmitted(false);
              window.location.reload();
            }}
          >
            Cancle appointment
          </button>
        </div>
      ) : (
        <div>
          <div className="header">
            <h1>Book a session</h1>
            <p>
              Fill in the form below to book a virtual session with your doctor
            </p>
          </div>
          {loading ? (
            <h3>Scheduling the appointment</h3>
          ) : (
            <form className="deails" onSubmit={formHandler}>
              <p>
                <strong>Basic Info</strong>
              </p>
              <label className="appointment-label">
                First Name:
                <input
                  type="text"
                  value={info.fname}
                  required
                  onChange={(e) => setInfo({ ...info, fname: e.target.value })}
                />
              </label>

              <label className="appointment-label">
                Last Name:
                <input
                  type="text"
                  value={info.lname}
                  required
                  onChange={(e) => setInfo({ ...info, lname: e.target.value })}
                />
              </label>

              <label className="appointment-label">
                Email:
                <input
                  type="email"
                  value={info.email}
                  required
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                />
              </label>

              <label className="appointment-label">
                Doctor?
                <select
                  name="doctors"
                  value={info.doctorName}
                  required
                  onChange={(e) =>
                    setInfo({ ...info, doctorName: e.target.value })
                  }
                >
                  <option value="">--Choose a doctor--</option>
                  <option value="Dr. Radha Krishna">Dr. Radha Krishna</option>
                  <option value="Dr. Sita Ram">Dr. Sita Ram</option>
                  <option value="Dr. Laxmi Narayan">Dr. Laxmi Narayan</option>
                  <option value="Dr. Madan Mohan">Dr. Madan Mohan</option>
                </select>
              </label>

              {info.doctorName && (
                <div className="time_place">
                  <label className="appointment-label">
                    Where?
                    <input
                      type="radio"
                      value="google-meet"
                      name="location"
                      required
                      onChange={(e) =>
                        setInfo({ ...info, location: e.target.value })
                      }
                    />
                    <span>Google meet</span>
                    <input
                      type="radio"
                      value="phone"
                      name="location"
                      required
                      onChange={(e) =>
                        setInfo({ ...info, location: e.target.value })
                      }
                    />
                    <span>Phone</span>
                  </label>

                  <label className="appointment-label">
                    When?
                    <input
                      type="datetime-local"
                      value={info.timing}
                      required
                      onChange={(e) =>
                        setInfo({ ...info, timing: e.target.value })
                      }
                    />
                  </label>
                </div>
              )}
              <button type="submit">Book Appointment</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
export default BookAppointment;
