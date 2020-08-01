import React from "react"
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProjectDetail = (props) => {
  const [on, setOn] = useState(false);
  const propsState = props.location.state;
  return (
    <section id="work-detail">
      <div className="container">
        <div className="container__item">
          <h1 className="item__title">{propsState.title}</h1>
          <img src={propsState.imagedetail} alt="profile" className="item__img"/>
          <h2 className="item__title-sub">Project Summary</h2>
            <button className="item__language" onClick={() => setOn(true)}>日本語</button>
            <button className="item__language" onClick={() => setOn(false)}>English</button>
          <p className="item__text">
           {on ? propsState.jpsummary : propsState.summary}
          </p>
          <h2 className="item__title-sub">Technology</h2>
          <p className="item__text">
            {propsState.technology}
          </p>
            <a
              href={propsState.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="item__link"
            >
                <div className="item__btn">
                    Visit website
                </div>
            </a>
          <Link to="/" className="header__nav-link">
            {on ? "プロジェクト一覧へ戻る" : "Back to Projects"}
          </Link>
        </div>
      </div>
    </section>
  )  
}

export default ProjectDetail;