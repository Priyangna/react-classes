import React, {useState} from 'react'

export default function TextForm(props) {

    const upperCaseHandler=()=>{        
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to upperCase','success')
    }

    const lowerCaseHandler=()=>{        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase','success')
    }

    const onChangeHandler=(event)=>{        
        setText(event.target.value)
    }

    const removeExtraSpaceHandler=()=>{        
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const copyTextHandler=()=>{        
        var copyText = document.getElementById("myBox");        
        copyText.select();    
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Copied to clipboard','success')
    }

    const clearTextHandler=()=>{        
        setText("") 
    }

    const[text, setText]=useState('')
    //setText("Enter Text here....")
  return (
    <>
        
        <div className="container mb-3"  style={{color:props.mode==='light'?'#323345':'white'}} >
            <h1>{props.heading} </h1>
            <textarea className='form-control' id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':(props.mode==='dark'?'grey':(props.mode==='success'?'#87b691':'#8badb1')),color:props.mode==='light'?'#323345':'white'}} value={text} onChange={onChangeHandler}></textarea>
            <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={upperCaseHandler}>Convert to Uppercase</button>
            <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={lowerCaseHandler}>Convert to Lowercase</button>
            <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={removeExtraSpaceHandler}>Remove Extra spaces</button>            
            <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={copyTextHandler}>Copy Text</button>
            <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={clearTextHandler}>Clear Text</button>
        </div>   

        <div className="container">
        <div className="row table-primary"    style={{color:props.mode==='light'?'#323345':'white'}}>
            <div className="col border-bottom text-center" >
            Characters
            </div>
            <div className="col border-bottom border-end text-center">
            {text.length}
            </div>
            <div className="col border-bottom text-center">
            Words
            </div>
            <div className="col border-bottom text-center">
            {text.trim().split(' ').length}
            </div>
        </div>

        <div className="row table-primary"    style={{color:props.mode==='light'?'#323345':'white'}}>
            <div className="col border-bottom text-center" >
            Spaces
            </div>
            <div className="col border-bottom border-end text-center">
            {text.split(' ').length-1}
            </div>
            <div className="col border-bottom text-center" >
            Sentences
            </div>
            <div className="col border-bottom border-end text-center">
            {text.split('.').length-1}
            </div>
        </div>
        
</div>

<div className='container my-2'    style={{color:props.mode==='light'?'#323345':'white'}}>         
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something to preview it here."}</p>
 </div>  
    </>  
   
  )
}
