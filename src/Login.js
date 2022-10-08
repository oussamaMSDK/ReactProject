import React, { useState } from "react";
import './Login.css';

export default function Login(){
    
    var [log,setlog]=useState("");
    var [pass,setpass]=useState("")
    function c(){
       if( log == "" || pass == ""){ alert("You have to fill all the information out");}
         else{ alert("Shno kat7adani")}
    
    }
    
    return (<div id="BigMom">

        <input type={'text'} onChange={(e)=> setlog(e.target.value)} placeholder={"Login"} required={"required"} id="log"/><br/>
        <input type={'Password'} onChange={(e)=> setpass(e.target.value)} placeholder={"Login"} required={"required"} id="pass"/><br/>
        <input type={'button'} value={"Connection"} onClick={c}/>
    </div>);
}