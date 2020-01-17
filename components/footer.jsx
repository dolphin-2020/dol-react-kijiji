import React from 'react'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divStyle: { display: "inlineBlock", margin: "250px 0", width: "74%", height: "60px", backgroundColor: "lightblue", float: "left", padding: "30px" },
      imgStyle: { width: "50px", margin: "auto", float: "left" }
    }
  }
  render() {
    return (
      <div style={this.state.divStyle}>
        <p>Some contents here</p>
        {/*<img src="../src/img/02.jpeg" style={this.state.imgStyle}></img>*/}
      </div>
    )
  }
}