import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      password: "",
      age: "",
      batch:"",
      payment:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, email, password,age ,batch,payment} = this.state;
    console.log(fname, email, password, age,batch,payment);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        fname,
        email,
        password,
        age,
        batch,
        payment,
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error === "user exists") {
          alert("User Exists");
          window.location.reload();
        }
        if(data.error==="Fill all the required field"){
          alert("Fill all the required field");
        }
        if(data.error==="user not applicable"){
          alert("Age should be between 18-65");
        }
        if (data.status === "ok") {
          alert("Signup successful");
          window.location.href="./sign-in";
        }
        console.log(data, "userRegister");

      })
      .catch((error) => {
        // window.alert("User Exists");
        console.error('Error:', error);
      });
  }
  render() {
    return (
      <div className="contain">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label id="tmp1">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label id="tmp1">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label id="tmp1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        {/* <div className="mb-3">
          <label id="tmp1">Mobile No</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter No"
            onChange={(e) => this.setState({ phoneNo: e.target.value })}
          />
        </div> */}

        {/* <div className="mb-3">
          <label id="tmp1">Gender</label>
          <input type="radio" value="Male" name="gender" onChange={(e) => this.setState({ gender: e.target.value })}/> Male
          <input type="radio" value="Female" name="gender" onChange={(e) => this.setState({ gender: e.target.value })}/> Female
           
          </div> */}
          {/* <label id="tmp1">Age</label> */}
        
        {/* <input type="radio" className="tmp" value="Other" name="gender" /> Other */}
        <div className="mb-3">
          <label id="tmp1">Age</label>
          <input
            type="int"
            className="form-control"
            placeholder="Enter Age"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>
        <div className="tmp2">
          <label id="tmp1">Schdule</label>
          <div className="tmp">
            <input type="radio" value="6:00 AM - 7:00 AM" name="batch" onChange={(e) => this.setState({ batch: e.target.value })}/> 6:00 AM - 7:00
            AM
          </div>
          <div className="tmp">
            <input type="radio" value="7:00 AM - 8:00 AM" name="batch" onChange={(e) => this.setState({ batch: e.target.value })}/> 7:00 AM -
            8:00 AM
          </div>
          <div className="tmp">
            <input type="radio" value="8:00 AM - 9:00 AM" name="batch" onChange={(e) => this.setState({ batch: e.target.value })}/> 8:00 AM -
            9:00 AM
          </div>
          <div className="tmp">
            <input type="radio" value="5:00 PM - 6:00 PM" name="batch" onChange={(e) => this.setState({ batch: e.target.value })}/> 5:00 PM - 6:00
            PM
          </div>
        </div>
        <div className="tmp2">
          <label id="tmp1">Package</label>
          <div className="tmp">
            <input type="radio" value="paid" name="payment" onChange={(e) => this.setState({payment: e.target.value })}/> 500 Month
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
    );
  }
}
