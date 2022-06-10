

import React,{useState}  from 'react'



export default function Text(props) {

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: "white",
    //     color: "black"
      
    // });

    const [noExtractText, setnoExtractText] = useState("")
    
    const [text,finalText] = useState("");

    const [numText, numbers] = useState("");

    const upperFunc = ()=>{
        let newText = text.toUpperCase();
        finalText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const changeFunc = (event)=>{
        finalText(event.target.value)
    }

    const noExract = ()=>{
        let num = [];

        // let char = text.split("");
        // console.log(char);
        setnoExtractText("Numbers")
        for (let i = 0; i <text.length; i++) {
            if(!isNaN(text[i])){
                num.push(text[i])
            }
        }
        let no = num.join(" ");

        numbers(no);
        props.showAlert("Numbers Extracted","success")
    }

    const copyText= ()=>{
        var material = document.getElementById("textBox")
        material.select()
        navigator.clipboard.writeText(material.value)
        props.showAlert("Copied Text Successfully","success")
    
    }

    const clearText= ()=>{

        finalText("")
        props.showAlert("Text Cleared","success")
    }

    return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"grey":"white"}} >

        <div className="container">  
                <h1 style={{color:props.mode==="dark"?"white":"black"}}>Enter Your Text Below</h1>
                <div className="mb-3 my-2">         
                <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#091e14":"white",color:props.mode==="dark"?"white":"black",border: `2px solid ${props.mode==="dark"?"white":"black"}`}} value={text} onChange={changeFunc} id="textBox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={upperFunc}>Convert Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={noExract}>Extract Numbers</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={clearText}>Clear Text</button>


        </div>

        <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>TEXT SUMMARY</h2>
            <p>Your Text has <b className="no">{text.length}</b> characters and <b className="no">{text.split(" ").filter((ele)=>{return ele.length!==0}).length}</b> words </p>

            
        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Type Something to preview"}</p>    
        </div>
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>{noExtractText}</h2>
            <p>{numText}</p>
        </div> 
    </div>
    </>
  )
}
