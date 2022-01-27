import React from "react";
import "./card.style.css";
export const Card = (props) =>(
  <div className='card-container'>
    <img src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} alt="monster"/>
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
    <p>{props.monster.phone}</p>
    <p>{`Website : `+props.monster.website}</p>
    <p>{`City : `+props.monster.address.city}</p>
  </div>
);