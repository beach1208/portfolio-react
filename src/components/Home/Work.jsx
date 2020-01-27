import React from "react"
import { Spring }from "react-spring/renderprops"
import Thumbnail from './Thumbnail'
import Intro from "./Intro";
import { ThumbnailData } from '../../data/ThumbnailData'


const Work = (props) => {
  return (
    <div>
      <Intro/>
      <section id="project">
        <Spring
          from={{ opacity: 0, marginLeft: -500}}
          to={{ opacity: 1, marginLeft: 0}}
          config={{ delay: 1000, duration: 1000}}
        >
          {props => (
            <div style={props}>
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
            </div>
          )}
        </Spring>
        
    </section>
    </div>
  )
}

export default Work