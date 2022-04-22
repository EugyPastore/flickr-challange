import React from "react";

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
// now we can use it components elsewhere
export default Hello;
