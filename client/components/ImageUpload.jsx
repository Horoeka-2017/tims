import React from 'react'
import {Image, Transformation} from 'cloudinary-react'

export default class ImageUpload extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      thing: [] // do not call things thing
    }
  }

  render () {
    return (
      <Image cloudName = "djj7afphz" publicId="shelton_h1n9as">
        <Transformation width="600"/>
      </Image>
    )
  }
}
