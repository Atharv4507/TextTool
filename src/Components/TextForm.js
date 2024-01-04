// import { useState } from "react"
import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    let mypreview = {
        padding:"0 0 0 100",
        border: '2px solid black',
    }

    const handleUpButton = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Successfully Convered to Upper Case", "success")
    }
    const handleLowerButton = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Successfully Convered to Lowwer Case", "success")
    }
    const handleEraseAll = () =>{
        setText("")
        props.showAlert("Successfully Errased All the text", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () =>{
        var text  = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Successfully Copied to Clipbord", "success")
    }
    const [pasteText,setPasteText] = useState('')
    const handleCutPaste = (event) =>{
        setText(event.target.value);
        setPasteText(text);
        setText("");
        
    }
    const [pasteText1,setPasteText1] = useState('')
    const handleShow = (event) =>{
        setText(event.target.value);
        setPasteText1(text);
        props.showAlert("Text Successfully pasted in below paragraph", "success")
    }
    const handleExtraSpaces = () => {
        let new1 = text.split(/[ ]+/);
        setText(new1.join(" "));
        props.showAlert("Extra Spaces has been removed Successfully", "success")
    }
    const [htmlText,setHtmlText] = useState('')
    const handleConvertClick = (event) =>{
        setText(event.target.value);
        let text4 = document.getElementById("myBox");
        text4.innerHTML = text;
        const text3 = text4.textContent || text4.innerText;
        setHtmlText(text3);

    }
    return (
        <>
            <div className='container' style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">  
                    <textarea className="form-control" style={{backgroundColor: props.mode=== 'light' ? 'white': 'gray', 
                color:props.mode==='light' ? 'black': 'white'}}  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpButton}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerButton}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleEraseAll}>Erase All</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy All</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCutPaste}>CutPaste</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleShow}>show</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Erase Extra Spaces</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleConvertClick}>Run as HTML File</button>
            </div> 
            <div className="container"  style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>In {0.008 * text.split(" ").length} Minutes reads</p>
                <h1>Preview</h1>
                <p style={mypreview}>{text.length>0?text:"Write Something in Above TextBox"}</p>
                <p style={mypreview}>{pasteText}</p>
                <p style={mypreview}>{pasteText1}</p>
                <p style={mypreview} dangerouslySetInnerHTML={{__html: htmlText}}></p> 
                <p style={mypreview} >{htmlText}</p> 
            </div>       
        </>

    )
}
