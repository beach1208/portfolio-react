import React from "react"
import IntroImage from "../img/illustration.svg"

function Intro() {
  return (
    <section id="intro">
      <div className="container">
        <div className="container__item container__item--left">
          <h1 className="item__title">Hi, I’m Nagisa</h1>
          <span className="item__title-sub">I’m a Front-end Developer & Designer</span>
          <p className="item__text">
            Vestibulum lacus magni cubilia deleniti orci viverra venenatis? Eum mollit.
            Odit vehicula error diamlorem quidem eius? Ipsum, cillum necessitatibus porttitor.
            Ultrices doloremque tenetur diamlorem cupiditate varius, voluptas dictum. Fugiat pede.
            Ipsa voluptas atque voluptatum, sit commodi netus optio semper deleniti.
            Mi faucibus corrupti netus saepe dolores cumque torquent recusandae. A.
          </p>
        </div>
        <div className="container__item container__item--right">
          <img src={IntroImage} alt="illustration" className="item__img"/>
        </div>
      </div>
    </section>
  )  
}

export default Intro