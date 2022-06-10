import React from 'react'

export default function About(props) {


  return (
    <div className="container" style={{height:"100px",width:"1000px",border:`2px solid ${props.mode==="dark"?"white":"black"} `,align:"center",verticalAlign:"center"}}>
        <p class="lead" style={{color: props.mode==="dark"?"white":"black",backgroundColor: props.mode==="dark"?"black":"white"}}>
            TextUtils is a Utility to Manipulate the Text which is given on the text field!!!!
            You can perform Operations such as LowerCase to UpperCase, Copy the Text, Extract the Numbers from the given text and can also change the theme of the page from light mode to dark mode.
        </p>
    </div>
  )
}
