import React from "react"
import { Spring }from "react-spring/renderprops"
import IntroImage from "../img/illustration.svg"

const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="container__item container__item--left">
          <Spring
            from={{ opacity: 0, marginBottom: -100}}
            to={{ opacity: 1, marginBottom: 0}}
          >
            {props => (
              <div style={props}>
                <h1 className="item__title">Hi, I’m Nagisa</h1>
              </div>
            )}
          </Spring>
          <h2 className="item__title-sub">I’m a Front-end Developer & Designer</h2>
          <p className="item__text">
            I was born and raised in Fukuoka, Japan. Lived in United Arab Emirates and Canada for work.
            Currently based in Tokyo!
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