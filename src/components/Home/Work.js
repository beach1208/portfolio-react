import React from "react"
import Thumbnail from './Thumbnail'
// import { Route, Switch } from 'react-router-dom';
import Img1 from '../img/img1.jpg'
import Intro from "./Intro";

function Work(props) {
  return (
    <div>
      <Intro/>
      <section id="project">
        <div className="container cards">
          <Thumbnail
            link="/Project1"
            image={Img1}
            title="Project1"
            details="HTML/CSS/JavaScript"
          />
          <Thumbnail
            link="/Project1"
            image={Img1}
            title="Project1"
            details="HTML/CSS/JavaScript"
          />
          <Thumbnail
            link="/Project1"
            image={Img1}
            title="Project1"
            details="HTML/CSS/JavaScript"
          />
          <Thumbnail
            link="/Project1"
            image={Img1}
            title="Project1"
            details="HTML/CSS/JavaScript"
          />
          <Thumbnail
            link="/Project1"
            image={Img1}
            title="Project1"
            details="HTML/CSS/JavaScript"
          />
          <Thumbnail
            link="/Project1"
            image={Img1}
            title="Project1"
            details="HTML/CSS/JavaScript"
          />
        </div>
    </section>
    </div>
  )
}

export default Work