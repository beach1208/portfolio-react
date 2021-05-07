import React from "react"
import { Spring }from "react-spring/renderprops"
import * as easings from 'd3-ease'
import IntroImage from "../img/illustration.svg"

const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="container__item container__item--left">
          <Spring
            from={{ opacity: 0 , marginTop: 20 }}
            to={{ opacity: 1, marginTop: 0}}
            config={{ duration: 1000, easing: easings.easeBackInOut}}
          >
            {props => (
              <div style={props}>
                <h1 className="item__title">Hi, I’m Nagisa</h1>
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ delay: 300, duration: 1000, easing: easings.easeBackInOut}}
          >
            {props => (
              <div style={props}>
                <h2 className="item__title-sub">I’m a UI/UX Designer/Developer</h2>
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={{ delay: 500, duration: 1000, easing: easings.easeBackInOut}}
          >
            {props => (
              <div style={props}>
                <p className="item__text">
                  Currently based in Tokyo, Japan!
                </p>
              </div>
            )}
          </Spring>
        </div>
        <div className="container__item container__item--right">
           <Spring
            from={{ opacity: 0, marginTop: 20}}
            to={{ opacity: 1, marginTop: 0}}
            config={{ delay: 600, duration: 1000, easing: easings.easeBackInOut}}
          >
            {props => (
              <div style={props}>
                 <img src={IntroImage} alt="illustration" className="item__img"/>
              </div>
            )}
          </Spring>
        </div>
      </div>
    </section>
  )  
}

export default Intro