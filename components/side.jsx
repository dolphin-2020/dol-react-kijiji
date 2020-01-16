import React from 'react'

export default class Side extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="sideBar" style={{display:"inline", float:"right",width:"20%",height:"20em",backgroundColor:"#114444"}}>
        <a href="#"><img src="../src/img/car.png" style={{width:"140px"}}></img></a>
        <button type="button" style={{width:"10em",height:"2em"}}>Learning More</button>
      </div>
    )
  }
}