// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Image from "./components/image";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    console.log("Lets fetch photos");
    fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdd02e95e977cce5264f808f92d07bb2&extras=url_c&per_page=15&page=1&format=json&nojsoncallback=1&auth_token=72157720840637407-c578d34bb21201fc&api_sig=4f2a262bac2c97fd3b3fc4bc19448cf9"
    )
      .then((response) => response.json())
      .then((data) => {
        let photos = data["photos"]["photo"];
        console.log(photos);
        this.setState({
          images: photos,
          search: "",
        });
      });
  }

  handleSearch = (event) => {
    this.setState({
      search: event.value,
    });
  };
  render() {
    return (
      <div className="app">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch}
          />
        </div>
        <p className="page-title">Here are a photo from an image instance</p>
        <div className="showcase">
          {this.state.images.map(function (image) {
            return <Image image={image} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
