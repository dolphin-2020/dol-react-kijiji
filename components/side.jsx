import React from 'react'

let sideStyle={
  sideDiv:{textAlign:"center", display:"inline-block",float:"right",width:"20%",height:"40em",backgroundColor:"#114444"},
  pic:{width:"140px",padding:"20px 0px"},
  button:{width:"10em",height:"2em"},
  aLink:{margin:"auto"},
  decorationDiv:{width:"80%",height:"150px",border:"2px solid white",margin:"auto"},
  img:{width:"80%",padding:"20px 0"}
}

export default class Side extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={sideStyle.sideDiv}>
        <a href="#" style={sideStyle.aLink}><img src="../src/img/car.png" style={sideStyle.pic}></img></a>
        <button type="button" style={sideStyle.button}>Learning More</button>
        <p>some word here...</p>
        <div style={sideStyle.decorationDiv}></div>
        <img src="../src/img/botton-02.jpeg" style={sideStyle.img}></img>
        <img src="../src/img/06.png" style={sideStyle.img}></img>
      </div>
    )
  }
}