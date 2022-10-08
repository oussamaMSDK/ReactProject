import axios from "axios";
import React, { useState } from "react";
import Card from "./card";
import mbrsInfo from "./membersInfo";



function Menu(){
    var [inf,ayman] = useState([])
    var [name,setName] = useState("")
    var [birthday,setBirthday] = useState("")

    axios.get("https://breakingbadapi.com/api/characters").then(r=>ayman(r.data) )
    axios.post(
        "https://breakingbadapi.com/api/characters",
        {
            "name":name,
            "birthday":birthday
        },
         
        {
            headers:{
                "accept":"application/json"
            }
        }
    )
    // var members = state.inf.map(member=><Card 
            
    //     key={member.id}
    //     img={member.img} 
    //     name={member.name}
    //     position={member.position}
    //     phone={member.phone}
    //     email={member.email}
    //     website={member.website}
    //     />);
        
        
        
    

    // inf.map((mbr)=>console.log(mbr.id))
    // useEffect(()=>{inf.map(function(member){console.log(member.id)})},[])
    // inf.map(function(member){
    //     console.log(member.id);
    // }); 
    
    

    return(
        <div className="row bg-dark rounded p-3" style={{margin:"100px 0 50px 0px"}}>
            {inf.map(member=><Card 
                key={member.id}
                img={member.img} 
                name={member.name}
                birthday={member.birthday}
                />)}

        </div>
    )   

}
export default Menu;