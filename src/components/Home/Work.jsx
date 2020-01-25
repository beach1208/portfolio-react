import React from "react"
import Thumbnail from './Thumbnail'
import Intro from "./Intro";
import { ThumbnailData } from '../../data/ThumbnailData'


const Work = (props) => {
  return (
    <div>
      <Intro/>
      <section id="project">
        <div className="container cards">
          {
            ThumbnailData.map(thumbnail => {
              return (
                <Thumbnail
                  link={thumbnail.link}
                  image={thumbnail.image}
                  title={thumbnail.title}
                  details={thumbnail.details}
                  summary={thumbnail.summary}
                />
              )
            })
          }
        </div>
    </section>
    </div>
  )
}

export default Work