import React, { Component } from "react";

export default class UserDetails extends Component {
  // const navigate = useNavigate();
  

  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
    
  }
   
  componentDidMount() {
    fetch("https://63975a64fff1ec1045653116--cheerful-pixie-1ab34e.netlify.app/userData", {
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
 
  render() {
    return (
      
      <div>
         <h3>Welcome</h3>
        <h4>{this.state.userData.fname}</h4>
        
        <div className="tmp2">
          <label id="tmp1">Your Schdule Batch:</label> 
         
            <h6>{this.state.userData.batch}</h6>
            
          
        
  
        </div>
       {/* <form onSubmit={this.handleSubmit}>
       
        <div className="tmp2">
          <label id="tmp1">Schdule</label>
          <div className="tmp">
            <input type="radio" value="sex-seven" name="batch" /> 6:00 AM - 7:00
            AM
          </div>
          <div className="tmp">
            <input type="radio" value="seven-eight" name="batch" /> 7:00 AM -
            8:00 AM
          </div>
          <div className="tmp">
            <input type="radio" value="eight-nine" name="batch" /> 8:00 AM -
            9:00 AM
          </div>
          <div className="tmp">
            <input type="radio" value="five-six" name="batch" /> 5:00 PM - 6:00
            PM
          </div>
          </div>
          <div className="tmp2">
            <label id="tmp1">Package</label>
            <div className="tmp">
            <input type="radio" value="payment" name="pay" /> 500 Month
          </div>
          </div>
          <div className="G-grid">
          <button type="submit" className="btn btn-primary">
            Pay Now
          </button>
        </div>
      </form> */}
      
      
      <a  className="bch" href="/changebatch">Change Batch</a>
    
          
         
          <a className="bch1" href="/sign-in">Logout</a>
    
     
      {/* <button type="submit" className=" btn btn-primary" onClick={logout}>
            Logout
          </button> */}
      </div>
     
      
    );
  }
}
