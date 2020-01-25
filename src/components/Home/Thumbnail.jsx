import React from 'react';
import { Link } from 'react-router-dom';
 
const Thumbnail = (props) => {
  return (
      <div className="card">
          <Link to={{
            pathname: props.link,
            state: {
              image: props.image,
              title: props.title,
              technology: props.technology,
              summary: props.summary
            }
          }}
            className="card__link"
          >
          <img src={props.image} className="card__img" alt="thumbnail"/>
          <div className="card__text">
            <h3 className="card__text-title">{props.title}</h3>
            <p className="card__text-details">{props.technology}</p>
          </div>
        </Link>
      </div>
  )
}
 
export default Thumbnail;