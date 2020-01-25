import React from "react"

const Project1 = (props) => {
  console.log(props.location.state);
  const propsState = props.location.state;
  return (
    <section id="work-detail">
      <div className="container">
        <div className="container__item">
          <h1 className="item__title">{propsState.title}</h1>
          <img src={propsState.image} alt="profile" className="item__img"/>
          <h2 className="item__title-sub">Project Summary</h2>
          <p className="item__text">
           {propsState.summary}
          </p>
          <h2 className="item__title-sub">Technology</h2>
          <p className="item__text">
            {propsState.details}
          </p>
          <div className="item__btn">
            <a
              href="https://performance.envisio.com/dashboard/bayview/"
              target="_blank"
              rel="noopener noreferrer"
              className="item__link"
            >
              Visit website
            </a>
          </div>
        </div>
      </div>
    </section>
  )  
}

export default Project1;