import React from 'react';
import { Link } from 'react-router-dom';
 
function Thumbnail(props) {
  return (
      <div className="card">
        <Link to={props.link} className="card__link">
          <img src={props.image} className="card__img" alt="thumbnail"/>
          <div className="card__text">
            <h3 className="card__text-title">{props.title}</h3>
            <p className="card__text-details">{props.details}</p>
          </div>
        </Link>
      </div>
  )
}
 
export default Thumbnail;