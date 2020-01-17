import React from 'react'

let headStyle={
  header:{display:"inlineBlock",height:"8em",backgroundColor:"lightblue"},
  headTopDiv:{display:"inline-block",height:"1em"},
  img:{width:"3em",padding:"1em 0 0 1em"},
  input:{width:"20em",height:"2.5em",fontSize:"14px", marginLeft:"1em"},
  select:{width:"12em",height:"4em",margin:"0px"},
  searchInput:{width:"20em",height:"2em",fontSize:"14px", marginLeft:"0em"},
  aTag:{padding:"10px",textDecoration:"none",color:"black"},
  button:{width:"32px",height:"32px",paddingRight:"30px"},
  lastButton:{width:"24px"}

}
export default class Header extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
      <header style={headStyle.header}>

        <div style={headStyle.headTopDiv}>
          <img src="../src/img/Icon.png" style={headStyle.img}></img>
          <input type="text" placeholder="Search for anything" style={headStyle.input}></input>
          <select style={headStyle.select}>
            <option value ="dolphin">Dolphin</option>
            <option value ="dragon">Dragon</option>
            <option value="zane">Zane</option>
            <option value="lia">Lia</option>
          </select>
          <input type="text" style={headStyle.searchInput}></input>
          <button type="button" style={headStyle.button}><img src="../src/img/10.png" style={{width:"24px",height:"24px"}}></img></button>
          <a href="#" style={{padding:"1em"}}>FR</a>
          <a href="#" style={{padding:"1em"}}>Register<span>or</span></a>
          <a href="#" style={{padding:"1em"}}>Sign in</a>
          <button type="submit"><img src="..//src/img/good.jpg" style={headStyle.lastButton}></img></button>
        </div>

        <div style={{paddingTop:"40px"}}>
          <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
            <a href="#" style={headStyle.aTag}>Buy & Sell</a>
            <a href="#" style={headStyle.aTag}>Car & Vehicles</a>
            <a href="#" style={headStyle.aTag}>Real Estate</a>
            <a href="#" style={headStyle.aTag}>Jobs</a>
            <a href="#" style={headStyle.aTag}>Service</a>
            <a href="#" style={headStyle.aTag}>Pets</a>
            <a href="#" style={headStyle.aTag}>Vacation Rental</a>
            <a href="#" style={headStyle.aTag}>Community</a>
          </div>

          

      </div>

      </header>
    )
  }
}