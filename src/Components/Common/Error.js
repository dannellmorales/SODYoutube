
import React from 'react'
import { Link } from 'react-router-dom'
const err = {
    fontSize: "50px",
    border: "3px solid black",
    textDecoration: "none"
}
export default function Error() {
  return (
    <div>
  <img src="https://cdn.mos.cms.futurecdn.net/y87LyLUSJtRKUQDo6xzLbE-970-80.jpg.webp"></img>
  <br></br>
  
      <Link to="/" style={err}>Back to the Homepage....</Link>
    </div>
  )
}

















