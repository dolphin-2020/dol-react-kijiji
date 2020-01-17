 const Style={
  styles:{
    main:
    {display:"block",float:"left",width:"80%",backgroundColor:"#eee",height:"500px"},
    mainDiv:
    {display:"flex",justifyContent:"space-around",flexWrap:"wrap"},
    picContentDiv: 
    {textAlign:"center", width:"12%", height:"170px",backgroundColor:"#fff"},
    img:
    {width:"70%",margin:"auto"},
    price:
    {color:"green",fontSize:"16px",margin:"auto"},
    aTag:
    {fontSize:"12px",textDecoration: "none",margin:"auto"},
    mainDivBottom:
    {display:"flex",justifyContent:"space-around",flexWrap:"wrap"},
    bottomImg: 
    {width:"100%",height:"100%", margin:"0 auto",position:"relative",borderRadius:"10px"},
    bottomPicDiv:
    {width:"22%", margin:"0 auto",position:"relative",padding:"15px 0px"},
    onBottomPicDiv:
    {opacity:"50%",backgroundColor:"blue",margin:"auto",width:"80%",textAlign:"center",position: "absolute",top:"50%",left:"50%",transform: "translate(-50%, -50%)"}
  },
  sideStyle:{
    sideDiv:{textAlign:"center", display:"inline-block",float:"right",width:"20%",height:"40em",backgroundColor:"#114444"},
    pic:{width:"140px",padding:"20px 0px"},
    button:{width:"10em",height:"2em"},
    aLink:{margin:"auto"},
    decorationDiv:{width:"80%",height:"150px",border:"2px solid white",margin:"auto"},
    img:{width:"80%",padding:"20px 0"}
  },
  headStyle:{
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
}
export default Style;