import React from 'react'

const styles={
  main:{display:"block",float:"left",width:"80%",backgroundColor:"#aaa",height:"500px"},
  mainDiv:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",backgroundColor:"#aabb88"},
  picContentDiv: {width:"10%", height:"150px",backgroundColor:"#99aaff",display:"inline",textAlign:"center"},
  img:{width:"70%",margin:"0 auto"},
  price:{color:"green",fontSize:"16px"},
  aTag:{fontSize:"12px",textDecoration: "none",lineHeight:"7px"}

}

class PicDiv extends React.Component{
  render(){
    return(
      <div style={styles.picContentDiv}>
        <img src={this.props.src} style={styles.img}/>
        <a href="#" style={styles.aTag}>{this.props.text}</a>
        <p style={styles.price}>{this.props.price}</p>
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
      <h3>Recommended for you</h3>
        <div style={styles.mainDiv}>

        <PicDiv text={"2008 brand is good"} price={"6999.99"} src={"../src/img/01.jpeg"}/>
        <PicDiv text={"What the fun day"} price={"5799.00"} src={"../src/img/02.jpeg"}/>
        <PicDiv text={"Real good product"} price={"643.21"} src={"../src/img/03.jpeg"}/>
        <PicDiv text={"Char for all of us"} price={""} src={"../src/img/04.jpeg"}/>
        <PicDiv text={"Good product is fun"} price={""} src={"../src/img/05.jpeg"}/>
        <PicDiv text={"2008 brand is good"} price={""} src={"../src/img/06.png"}/>
        <PicDiv text={"Are there any body"} price={""} src={"../src/img/07.jpeg"}/>

        </div>

        <div style={styles.mainDiv}>

        </div>
      </main>
    )
  }
}