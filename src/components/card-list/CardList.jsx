import React from 'react';

import { Card } from "./../card/Card";

import './card-list.css';

export const CardList = (props) =>{
  return (
    <div className="card-list">
      {props.users.map(user => {
        return <Card id={user.id} user={user}/>
      })}
    </div>
  );
}