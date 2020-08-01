import React from 'react';
import { Link } from 'react-router-dom';
 
const Thumbnail = (props) => {
  return (
      <div className="card">
          <Link to={{
            pathname: props.link,
            state: {
              image: props.image,
              imagedetail: props.imagedetail,
              title: props.title,
              projectLink: props.projectLink,
              technology: props.technology,
              summary: props.summary,
              jpsummary: props.jpsummary
            }
          }}
            className="card__link"
          >
          <div className="card__image-container">
            <img src={props.image} className="card__img" alt="thumbnail"/>
          </div>
          <div className="card__text">
            <h3 className="card__text-title">{props.title}</h3>
            <p className="card__text-details">{props.technology}</p>
          </div>
        </Link>
      </div>
  )
}
 
export default Thumbnail;