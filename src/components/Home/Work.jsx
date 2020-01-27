import React from "react"
import { Spring }from "react-spring/renderprops"
import * as easings from 'd3-ease'
import Thumbnail from './Thumbnail'
import Intro from "./Intro";
import { ThumbnailData } from '../../data/ThumbnailData'


const Work = (props) => {
  return (
    <div>
      <Intro/>
      <section id="project">
        <Spring
          from={{ opacity: 0, marginTop: 200}}
          to={{ opacity: 1, marginTop: 0}}
          config={{ delay: 800, duration: 600}}
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