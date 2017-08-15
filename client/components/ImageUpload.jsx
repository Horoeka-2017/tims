import React from 'react'

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      thing: [] // do not call things thing
    }
  }
  uploadImage () {
    cloudinaryUrl = "http://res.cloudinary.com/djj7afphz/image/upload"

  }
  render () {
    return (
      <form method="post" enctype="multipart/form-data">
        select image to upload:
        <input type="file" name="fileToUpload" id="fileToUpload"/>
        <input type="text" name="imageName" id="imageName"/>
        <input type="submit" value="UploadImages" name="submit"/>
      </form>
    )
  }
}
