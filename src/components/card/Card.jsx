import React from "react";

import './card.css';

export const Card = (props) =>{
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.id}?set=set4&size=180x180`} alt="user" />
      <h2 key={props.id}>{props.user.name}</h2>
      <p>{props.user.email !=null ? props.user.email : "No Email"}</p>
    </div>
  );
}