import React from 'react'
import { Link } from "react-router-dom";

export default function Signup() {
    let myStyle={
        width:350,
    }
    let myStyle2={
        marginLeft:65,
        fontFamily:'Inconsolata',  
    }
  return (
    <>
    <div className='container mt-5 text-bg-dark p-3' style={{width:500,height:550, borderRadius: 10}}>
      <p className="bgimg mb-5" style={{marginLeft:170,fontSize:35,fontFamily:'Hubballi'}}>Signup</p>
      {/* <img src="D:\Car-parking project\car-parking\src\Components\parking.jpg" alt="" class="bg-image"/> */}
      <form>
  <div className="mb-4" style={myStyle2}>
    <label for="exampleInputEmail1" className="form-label">Email-ID</label>
    <input type="email" className="form-control" style={myStyle} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text" style={{color:'grey'}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-4" style={myStyle2}>
    <label for="exampleUserName" className="form-label">User-Name</label>
    <input type="text" className="form-control" style={myStyle} id="exampleUserName"/>
  </div>
  <div className="mb-4" style={myStyle2}>
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" style={myStyle} id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-outline-success mt-5" style={{marginLeft:65,fontFamily:'Inconsolata',borderRadius: 50,width: 350}}><Link to="/" style={{textDecoration:'none', color:'white'}}>Signup</Link></button>
</form>
    </div>
    
    </>);
}
