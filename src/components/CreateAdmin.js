import React, { Component } from "react";
import axios from "axios";
import "./css/Sstyle.css";
import swal from 'sweetalert'


export default class CreateAdmin extends Component{

  constructor(props){
    super(props);
    this.state={
        Mname:"",
        Mpotition:"",
        Email:"",
        Pnumber:"",
        Address:"",
        Password:"",

    }
  }
  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }
  
  onSubmit=(e)=>{
    e.preventDefault();

    const{Mname,Mpotition,Email,Pnumber,Address,Password}=this.state;

    const data={
        Mname:Mname,
        Mpotition:Mpotition,
        Email:Email,
        Pnumber:Pnumber,
        Address:Address,
        Password:Password,

      
    }

    console.log(data)

    axios.post("http://localhost:8000/post/save",data).then((res)=>{
      if(res.data.success){
        this.setState(
          {
            Mname:"",
            Mpotition:"",
            Email:"",
            Pnumber:"",
            Address:"",
            Password:""
         
          
          }

        )
        swal({
          title: "New Manager Added",
          text: "Successfully!",
          icon: "success",
          button: "Okay",
        });
      }
    })

  
  }
  render(){
    

    return(
      <body class="CreateB">
      <div>

<div class="container">
<div class="title">Create Manager</div>
<div class="content">
  <form action="#">
    <div class="user-details">
      <div class="input-box">
        <span class="details">Full Name</span>
        <input type="text" placeholder="Enter Name" name="Mname" value={this.state.Mname} onChange={this.handleInputChange} required/>
      </div>
      <div class="input-box">
      <span class="details">Manager Potition</span>
      <select class="rcorners2" name="Mpotition" value={this.state.Mpotition} onChange={this.handleInputChange}  required>
                <option value="research">Research and Development management</option>
                <option value="procu">Procurement management</option>
                <option value="sales">Sales and Marketing Management</option>
                <option value="HR">Human Resource Management</option>
	            <option value="Accounts">Accounts and Finance Management</option>
	            <option value="Legal">Legal and Regulatory Management</option>
	            <option value="factory">Factory and Stores Management</option>
	            <option value="travel">Travel and Transport Management</option>
               </select>
         </div>
      <div class="input-box">
        <span class="details">Email</span>
        <input type="email"  placeholder="Enter Email" name="Email" value={this.state.Email} onChange={this.handleInputChange} required/>
      </div>
      <div class="input-box">
        <span class="details">Phone Number</span>
        <input type="tel" placeholder="Enter Number" name="Pnumber"  value={this.state.Pnumber}  onChange={this.handleInputChange} required/>
      </div>
      <div class="input-box">
        <span class="details">Address</span>
        <input type="text" placeholder="Enter Address" name="Address" value={this.state.Address} onChange={this.handleInputChange} required/>
      </div>
      <div class="input-box">
        <span class="details">Password</span>
        <input type="password" placeholder="Enter Password" name="Password" value={this.state.Password} onChange={this.handleInputChange} required/>
        
      </div>
    </div>
    <div class="col-12">
    <button type="submit" class="button11" onClick={this.onSubmit}><span>Create Manager</span></button>
   
     </div>
  </form>
</div>
</div>
<a  href="/"><center><button id="cButton" type="button" class="btn btn-success"><i class="fa-sharp fa-solid fa-hand-back-point-left"></i>Back</button></center></a>              	
       </div></body>
    )
  
}
}