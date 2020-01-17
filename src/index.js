import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header.jsx'
import Side from '../components/side.jsx'
import MainBody from '../components/mainBody.jsx'
import Footer from '../components/footer.jsx'

ReactDOM.render(
  <div>
    <Header/>
    <Side/>
    <MainBody/>
    <Footer/>
  </div>,
  document.getElementById("demo")
)