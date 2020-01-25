import React from "react"
import ProfileImage from "../img/profile.jpg"

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="container__item container__item--left">
          <h1 className="item__title">About me</h1>
          <p className="item__text">
            Vestibulum lacus magni cubilia deleniti orci viverra venenatis? Eum mollit.
            Odit vehicula error diamlorem quidem eius? Ipsum, cillum necessitatibus porttitor.
            Ultrices doloremque tenetur diamlorem cupiditate varius, voluptas dictum. Fugiat pede.
            Ipsa voluptas atque voluptatum, sit commodi netus optio semper deleniti.
            Mi faucibus corrupti netus saepe dolores cumque torquent recusandae. A.
          </p>
          <span className="item__title-sub">Skills</span>
          <p className="item__text">
          HTML5, CSS3, SASS(SCSS), JavaScript, jQuery, React.js, GSAP, Bootstrap
  Wordpress, PHP, Sketch, Adobe XD, UI Design
          </p>
        </div>
        <div className="container__item container__item--right">
          <img src={ProfileImage} alt="profile" className="item__img"/>
        </div>
      </div>
    </section>
  )  
}

export default About