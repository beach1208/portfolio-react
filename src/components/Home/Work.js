import React from "react"
import Thumbnail from './Thumbnail'
// import { Route, Switch } from 'react-router-dom';
import Img1 from '../img/img1.jpg'
import Intro from "./Intro";

function Work(props) {
  return (
    <div>
      <Intro/>
      <Thumbnail
        link="/Project1"
        image={Img1}
        title="Project1"
      />
    </div>
  )
}

export default Work