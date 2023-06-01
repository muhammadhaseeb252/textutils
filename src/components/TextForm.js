import React, {useState} from 'react'


export default function TextForm(props) {

    // hooks
    const [text, setText] = useState('Enter text here...');

    const change = (event)=>{
        // console.log('on change');
        setText(event.target.value);
    }

    const uclick = ()=>{
        // console.log('button clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to upercase','success');
    }

    const lclick = ()=>{
        // console.log('button clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase', 'success');
    }

    const cclick = ()=>{
        // console.log('button clicked');
        let newText ='';
        setText(newText);
    }

    // copt to clipboard
    const clclick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard', 'success');
    }

    // remove extraspaces
    const rclick = ()=>{
        var newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    

    return (
        <>
        <div className='container my-2' style={
            {color: props.mode==='light'?'black':'white'}   
            }>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                {/* <label htmlFor="textbox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" onChange={change} value={text} id="mytext" rows="8" style={
                 {backgroundColor: props.mode==='light'?'white':'#13566e', color: props.mode==='light'?'black':'white'}   
                }></textarea>
            </div>
            <button className="btn btn-primary" onClick={uclick}>Convert to upercase</button>
            <button className='btn btn-success mx-1' onClick={lclick}>Convert to lowercase</button>
            <button className='btn btn-success mt-2' onClick={cclick}>Clear text</button>
            <button className='btn btn-warning mx-1 mt-2' onClick={clclick}>Copy to clip</button>
            <button className='btn btn-danger mt-2' onClick={rclick}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={
            {color: props.mode==='light'?'black':'white'}   
            }>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read.</p>
            <h4>Preview</h4>
            <p>{text.length>0?text: 'Write something in the above box to preview...'}</p>
        </div>
        </>
        

    )
}
