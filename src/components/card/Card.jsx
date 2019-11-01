import React from "react";

import './card.css';

export const Card = (props) =>{
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.id}?set=set1&size=200x200`} alt="user" />
      <h1 key={props.id}>{props.user.name}</h1>
      <p>{props.user.email !=null ? props.user.email : "No Email"}</p>
    </div>
  );
}