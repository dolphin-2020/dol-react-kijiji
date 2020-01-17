import React from 'react'

const styles={
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
}

class PicDiv extends React.Component{
  render(){
    return(
      <div style={styles.picContentDiv}>
        <img src={this.props.src} style={styles.img}/><br/>
        <a href="#" style={styles.aTag}>{this.props.text}</a>
        <p style={styles.price}>{this.props.price}</p>
</div>
    )
  }
}

class BottomImg extends React.Component{
  render(){
    return(
      <div style={styles.bottomPicDiv}>
        <img src={this.props.src} style={styles.bottomImg}></img>
        <div style={styles.onBottomPicDiv}>
        <p style={{color:"white",margin:"auto"}}>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default class MainBody extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <main style={styles.main}>
        <h4>Recommended for you</h4>
        <div style={styles.mainDiv}>

        <PicDiv text={"2008 brand is good"} price={"6999.99"} src={"../src/img/04.jpeg"}/>
        <PicDiv text={"What the fun day"} price={"5799.00"} src={"../src/img/02.jpeg"}/>
        <PicDiv text={"Real good product"} price={"643.21"} src={"../src/img/05.jpeg"}/>
        <PicDiv text={"Char for all of us"} price={"567.00"} src={"../src/img/04.jpeg"}/>
        <PicDiv text={"Good product is fun"} price={"443.89"} src={"../src/img/05.jpeg"}/>
        <PicDiv text={"2008 brand is good"} price={"549.90"} src={"../src/img/02.jpeg"}/>
        <PicDiv text={"Are there any body"} price={"35.90"} src={"../src/img/04.jpeg"}/>

        </div>
        <h4>Popular in Auto</h4>
        <div style={styles.mainDivBottom}>
        
        <BottomImg src={"../src/img/botton-01.jpeg"} text="This is test"/>
        <BottomImg src={"../src/img/botton-02.jpeg"} text="Is this test?"/>
        <BottomImg src={"../src/img/botton-03.jpeg"} text="Test of this"/>
        <BottomImg src={"../src/img/botton-04.jpeg"} text="Good test"/>
        <BottomImg src={"../src/img/botton-05.jpeg"} text="Bad test"/>
        <BottomImg src={"../src/img/botton-06.jpeg"} text="Funny test"/>
        <BottomImg src={"../src/img/botton-07.jpeg"} text="Saying test"/>
        <BottomImg src={"../src/img/botton-08.jpeg"} text="What the good test"/>
        
        </div>
      </main>
    )
  }
}