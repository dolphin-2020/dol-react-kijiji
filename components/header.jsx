import React from 'react'


export default class Header extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
      <header style={{display:"block",height:"8em",backgroundColor:"lightblue"}}>
        <div style={{display:"inline-block",height:"1em"}}>
          <img src="../src/img/Icon.png" style={{width:"3em",padding:"1em"}}></img>
          <input type="text" placeholder="Search for anything" style={{width:"15em",height:"2em",fontSize:"1em",margin:"1em"}}></input>
          <select style={{width:"12em",height:"4.5em",margin:"0px"}} >
            <option value ="dolphin">Dolphin</option>
            <option value ="dragon">Dragon</option>
            <option value="zane">Zane</option>
            <option value="lia">Lia</option>
          </select>
          <input type="map"></input>
          <button type="button" >ddd</button>
          <a href="#" style={{}}>FR</a>
          <a href="#" style={{}}>Register<span>or</span></a>
          <a href="#">Sign in</a>
          <button type="submit">Post ad</button>
        </div>

        <div style={{display:"inline-block"}}>
          <div style={{display:"flex"}}>
            <a href="#">Buy & Sell</a>
            <a href="#">Car & Vehicles</a>
            <a href="#">Real Estate</a>
            <a href="#">Jobs</a>
            <a href="#">Service</a>
            <a href="#">Pets</a>
            <a href="#">Vacation Rental</a>
            <a href="#">Community</a>
          </div>

          <div>
            <img src="../src/img/Icon.png" style={{width:"1em",padding:"1em"}}></img>
            <button type="button">About Us</button>
            <button type="button" style={{border:"0px"}}>?</button>
        </div>

      </div>
      </header>
    )
  }
}