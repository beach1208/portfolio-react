import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="container__item">
          <h1 className="item__title">Let's Keep in Touch</h1>
          <p className="item__text">
            Vestibulum lacus magni cubilia deleniti orci viverra venenatis? Eum mollit.
            Odit vehicula error diamlorem quidem eius? Ipsum, cillum necessitatibus porttitor.
            Ultrices doloremque tenetur diamlorem cupiditate varius, voluptas dictum. Fugiat pede.
            Ipsa voluptas atque voluptatum, sit commodi netus optio semper deleniti.
            Mi faucibus corrupti netus saepe dolores cumque torquent recusandae. A.
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