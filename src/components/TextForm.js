import React,{useState} from 'react'


export default function TextForm(props) {
const handleUpClick = ()=>{
      console.log("Uppercase was clicked"+text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase !","success");
}
const handleLoClick = ()=>{
    console.log("Lowercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
}

const handleClearClick = ()=>{
    console.log("Clear");
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!","success");
}
  
const handleOnChange = (event)=>{
      console.log("On Change");
      setText(event.target.value);

}
const handleCopy = ()=>{
    console.log(" I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeTex(text.value);
    props.showAlert("Copied to clipboard!","success");
}


const handleExtraSpaces = ()=>{
    console.log("handleExtraSpaces");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra space!","success");
}

const[text,setText] = useState('');
//   text = "new text"; //wrong way to change the state 
//   setText("new text"); //correct way to change the state   
return (
<>     
<div className="container"  style={{color:props.mode === 'dark'? 'white':'#042743'}}>
    <h1>{props.heading}</h1>     
    <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? 'grey':'white',color:props.mode === 'dark'? 'white':'#042743'}} rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
</div>
<div className="container my-3"  style={{backgroundColor:props.mode === 'dark'? 'grey':'white',color:props.mode === 'dark'? 'white':'#042743'}}>
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text>0 ? text : "Enter something to preview it here"}</p>
</div>
</>     
  )
}
