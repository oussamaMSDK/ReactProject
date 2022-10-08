import React from "react";

function Card(props){

    // const testweb = props.website;
    // let col ="";
    // testweb?col="green":col="red";
    return(

        <div className="flex col-md-4 col-sm-6 align-items-center space-between">
            <div className="card" style={{alignSelf:"normal", flex:"1 1 21rem"}} id="oneCard">
                <div className="card-header">
                    <img src={props.img} style={{maxWidth:"100%"}}/>  
                </div>
                    <div className="card-body" style={{}}>
                        <h3>{props.name}</h3>
                        <h5>{props.birthday}</h5>
                    </div>
            </div>
            

        </div>
    )

}
export default Card;