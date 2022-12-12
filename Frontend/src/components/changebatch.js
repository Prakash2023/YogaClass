import React, { Component } from "react";

export default class ChangeBatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          batch:"",
          userData:"",

        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      componentDidMount() {
        fetch("http://localhost:5000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        }).then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            this.setState({ userData: data.data });
          })
          .catch((error) => {
            // window.alert("User Exists");
            console.error('Error:', error);
          });
        
      }
      handleSubmit(e) {
        e.preventDefault();
        const { batch} = this.state;
        console.log(batch);
        fetch("http://localhost:5000/updatebatch", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email:this.state.userData.email,
            batch,
          }),
        })
          .then((res) => res.json())
          .then((data) => 
          {
            console.log(data, "userRegister");
            if (data.status === "Updated") {
              alert("Update successful");
              window.localStorage.setItem("token", data.data);
              window.location.href="./userDetails";
            }
            else{
                alert("You can change in next Month");
                window.location.href="./userDetails";
            }
          })
          .catch((error) => {
           
            console.error('Error:', error);
          });
      }
   
      
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
       <h3>Change Batch</h3>
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
            <input type="radio" value="5:00 PM -6:00 PM" name="batch" onChange={(e) => this.setState({ batch: e.target.value })}/> 5:00 PM - 6:00
            PM
          </div>
          {/* <h3>{this.state.userData.email}</h3> */}
         
          
        </div>
        {/* <div className="mb-3">
          <label id="tmp1">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
         
        </div>
      </div>
      </form>
     
      
    );
  }
}