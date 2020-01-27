import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="container__item">
          <h1 className="item__title">Let's Keep in Touch</h1>
          <p className="item__text">
            Thank you for visiting my portfolio!
            I'm currently looking for a Front end / UI Developer jobs.
            Feel free to message me through social medias or email if you are interetested in working with me!
          </p>
          <span className="item__title-sub">
            <a href="mailto:nagisa.kojima9128@gmail.com">
              <FontAwesomeIcon icon="envelope"/>
              nagisa.kojima9128@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  )  
}

export default Contact