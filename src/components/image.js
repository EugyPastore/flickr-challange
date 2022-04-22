import React from "react";
import "./image.css";

// 1 way of doing
// const image = {
// 	url: "https//",
// etc;
// }
// <Image image = {image}/>>
class Image extends React.Component {
  render() {
    const style = {
      backgroundImage: `url('${this.props.image.url_c}')`,
    };
    return <div className="image-flickr" style={style}></div>;
  }
}

export default Image;
