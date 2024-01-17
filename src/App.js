import React, {Component} from "react";
import AdminDetails from "./components/AdminDetails";
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import CreateAdmin from "./components/CreateAdmin";
import UpdateAdmin from "./components/UpdateAdmin";

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
      <Routes>
        <Route path="/" element={<AdminDetails/>}/>
        <Route path="/Create" element={<CreateAdmin/>}/>
        <Route path="/Update/:id" element={<UpdateAdmin/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    )
  }
}