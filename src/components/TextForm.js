import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
   
   
    function handleUpclick(){
        console.log("uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    function handleOnchange(event){
        console.log("change occuring");
        setText(event.target.value);
   }
   function handleLowclick()
   {
    console.log("lowercase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
   }

   function handleCopyclick()
   {
    console.log("Copied text to clipboard");
    alert('"' +text +'"' + "copied to clipboard");
    navigator.clipboard.writeText(text);
    
   }
   function handleClear(){
    setText("");
   }
   function handleExtraspaces()
   {
    let newtext=text.replace(/\s+/g,' ').trim();
    setText(newtext);
   }

   const [text, setText] = useState('Enter text here lol');
  return (
    <>
   <div className="form-group" style={{color: props.mode==='dark'?'white':'black'}}>
    <h3 htmlFor="mybox" className="my-2">{props.heading} </h3>
    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#063970':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove extra spaces</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyclick}>Copy to clipboard</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear the text box</button>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>your text details</h1>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>Average reading time: {0.008*(text.trim() === '' ? 0 : text.match(/\S+/g).length)} minutes</p>
        <p>Preview:</p>
        <p>{text.length>0?text:"Enter text to preview here"}</p>
    </div>

    </>
  )
}
