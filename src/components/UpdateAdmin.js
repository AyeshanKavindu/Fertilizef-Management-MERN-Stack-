import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'
import "./css/new.css"
import swal from 'sweetalert';


const UpdateAdmin = () => {
    const {updata, setUPdata} = useContext(updatedata)

    const history = useNavigate("");
    const [inpval,setINP] = useState({
        Mname:"",
        Mpotition:"",
        Email:"",
        Pnumber:"",
        Address:"",
        Password:""
    })

    const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }
    const { id } = useParams("");
    console.log(id);

    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/manager/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const  {Mname,Mpotition,Email,Pnumber,Address,Password} = inpval;

        const res2 = await fetch(`http://localhost:8000/postupdate/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                Mname,Mpotition,Email,Pnumber,Address,Password
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            swal("Updated!", "Successfully!", "success")
            history("/")
            setUPdata(data2);
        }

    }

    return (
        <body class="UpdateB">
        <div>
           <div class="containerrr"><div><h3 class="uManager">Update Manager Details</h3></div>
      <form method="post" autocomplete="on">
      
    		<div class="box">
          <label for="firstName" class="fl fontLabel"> Manager Name: </label>
    			<div class="new iconBox">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
    			<div class="fr">
    					<input type="text" value={inpval.Mname} onChange={setdata} name="Mname" placeholder="Name"
              class="textBox" autofocus="on" required />
    			</div>
    			<div class="clr"></div>
    		</div>
    		


        
    		<div class="box">
          <label for="secondName" class="fl fontLabel"> Manager Potition: </label>
    			<div class="fl iconBox"><i class="fa-solid fa-location-crosshairs" aria-hidden="true"></i></div>
    			<div class="fr">
    		   <select  onChange={setdata} value={inpval.Mpotition} name="Mpotition" class="textBox" required>
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
    			<div class="clr"></div>
    		</div>
    		


    		
    		<div class="box">
          <label for="phone" class="fl fontLabel"> Email: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="email"  required onChange={setdata} value={inpval.Email} name="Email" maxlength="10" placeholder="Phone No." class="textBox"/>
    			</div>
    			<div class="clr"></div>
    		</div>
    		


    		
    		<div class="box">
          <label for="number" class="fl fontLabel"> Phone Number: </label>
    			<div class="fl iconBox"><i class="fa fa-phone-square" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required onChange={setdata} value={inpval.Pnumber} name="Pnumber" placeholder="Email Id" class="textBox"/>
    			</div>
    			<div class="clr"></div>
    		</div>
    		


    		
    		<div class="box">
          <label for="address" class="fl fontLabel"> Address </label>
    			<div class="fl iconBox"><i class="fa-solid fa-address-book" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="address" required onChange={setdata} value={inpval.Address} name="Address" placeholder="Password" class="textBox"/>
    			</div>
    			<div class="clr"></div>
    		</div>
            <div class="box">
          <label for="password" class="fl fontLabel"> Password </label>
    			<div class="fl iconBox"><i class="fa fa-key" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="Password" required onChange={setdata} value={inpval.Password} name="Password" placeholder="Password" class="textBox"/>
    			</div>
    			<div class="clr"></div>
    		</div>
            <div class="box">
    				<input type="Submit" onClick={updateuser} class="submit" value="Update"/>
    		</div>
      </form><a  href="/"><center><button  type="button" class="btnn"><i class="fa-solid fa-backward"></i>&nbsp;Back</button></center></a>
  </div>
        </div></body>
    )
}

export default UpdateAdmin