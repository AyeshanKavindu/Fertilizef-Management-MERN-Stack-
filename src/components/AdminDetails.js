import React, { Component } from "react";
import axios from 'axios';
import "./css/Style.css";
import swal from 'sweetalert';

export default class AdminDetails extends Component{

  constructor(props){
    super(props);

    this.state={
      Posts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/posts").then(res=>{
    if(res.data.success){
      this.setState({
        Posts:res.data.existingPosts
      });
      console.log(this.state.Posts)
    }
  });
}


handleClick=async ()=>{
  const response=await fetch()
}

filterData(Posts,searchKey){
  const result=Posts.filter((Post)=>
  Post.Email.includes(searchKey)
  
  
  )
  this.setState({Posts:result})
}
handleSearchArea= (e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("http://localhost:8000/posts").then(res=>{
    if(res.data.success){

    this.filterData(res.data.existingPosts,searchKey)
     }
  });
}

onDelete = (id)=>{
  axios.delete(`http://localhost:8000/post/delete/${id}`).then((res)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you can't recover the manager",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("User has been deleted!", {
          icon: "success",
        });
      } else {
        swal("User didn't removed");
      }
    });
    
    this.retrievePosts();
  })
}
  render(){
    return(
    
      <body class="DetailsB">
      <div>&nbsp;
      <div className="container-fluid">
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchQuery" onChange={this.handleSearchArea}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>&nbsp;
  <center><div><h1>Manager Details</h1></div></center>
</div>&nbsp;
        {this.state.Posts.map(Posts =>(
          <div>&nbsp;
<div>  <center>         
<table  class="content-table"> 
<thead>
  <tr>
    <th>Manager Name</th>
    <th>Management Potition</th>
    <th>Email</th>
    <th>Phone Number</th>
    <th>Address</th>
    <th>Password</th>
    <th>Action</th>
    <th ></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>{Posts.Mname}</td>
    <td>{Posts.Mpotition}</td>
    <td>{Posts.Email}</td>
    <td>{Posts.Pnumber}</td>
    <td>{Posts.Address}</td>
    <td>{Posts.Password}</td>
    <td><a className="btn btn-warning" href={`/Update/${Posts._id}`}>
        <i className="fas fa-edit"></i>&nbsp;Edit
      </a> </td>
    <td><a className="btn btn-danger" href="#" onClick={()=>this.onDelete(Posts._id)} >
        <i className="far fa-trash-alt"></i>&nbsp;Delete
      </a></td>
  </tr>
</tbody>
</table></center></div>
</div>
          
        ))}&nbsp;<center><a  href="/Create"><button class="btn btn-outline-success"><i class="fa-sharp fa-solid fa-user-plus"></i>Add new manager</button></a></center>
    </div></body>
  
     
    )
  }
}