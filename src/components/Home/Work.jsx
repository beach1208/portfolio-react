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
                  key={thumbnail.id}
                  link={thumbnail.link}
                  projectLink={thumbnail.projectLink}
                  image={thumbnail.image}
                  imagedetail={thumbnail.imagedetail}
                  title={thumbnail.title}
                  technology={thumbnail.technology}
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