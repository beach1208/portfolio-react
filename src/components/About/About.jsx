import React from "react"
import ProfileImage from "../img/profile.jpg"

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="container__item container__item--left">
          <h1 className="item__title">About me</h1>
          <p className="item__text">
            Hi, I'm Nagisa. I'm a Japanese Front-end UI Developer.
            I started working as a flight attendant in United Arab Emirates after graduating from univitersity in Japan.
            Since I have always wanted to learn coding, I moved to Vancouver, Canada in 2017 to study programming.
            In 2019, I worked for a Vancouver based software company as a Front-end UI Developer.
            I enjoy Front end UX/UI design and coding a lot and I love collanborating with others to achive same goals together.
            <span>日本語・英語バイリンガルのUI/UXデザイナー/エンジニアです。お仕事のご相談につきましては、Email又はLinkedInからご連絡お願いします。</span>
          </p>
          <span className="item__title-sub">Skills</span>
          <p className="item__text">
          HTML5, CSS3, SASS(SCSS), JavaScript, jQuery, React.js, GSAP, Bootstrap, Figma, Sketch, Adobe XD, UI Design, Japanese(Native), English(Fluent).
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