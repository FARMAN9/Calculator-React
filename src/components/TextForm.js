import React ,{useState} from 'react'
//state and hooks


export default function TextForm() {
    const handleUpclick=()=>
    {
        setText(text.toUpperCase())
    }
    const handlelwclick=()=>
    {
        setText(text.toLowerCase())
    }
    const handleClear=()=>
    {
      setText('')
    }
    const handlerevclick=()=>
    {
      function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
   
        setText( reverseString(text))
    }

    const handlerenyclick=()=>{
      const str = text;
      try {
        let str2 = window.btoa(str); 
        setText(str2);
    } catch (error) {
        setText(error.toString())
    }
    
    }
    const handlerdenyclick=()=>{
      try {
        const str = text;
      let str2 = window.atob(str);
      setText(str2);
    } catch (error) {
      setText(error.toString())
    }
    } 
    const handlerCopyclick = () => {
      let copyText = document.getElementById("textBox");
      if (copyText) {
          navigator.clipboard.writeText(copyText.value)
              .then(() => {
                  alert("Text copied successfully!");
              })
              .catch((error) => {
                  console.error('Error copying text to clipboard:', error);
              });
      } else {
          console.error("Element with ID 'textBox' not found.");
      }
  }
  


    

    const handleChange=(e)=> //event handler
    {
        setText(e.target.value)
    }
    const [text,setText] = useState('Enter your text here');
  return (
    <div>
   
   
   <div className=" container mb-3 row-2">
    <label htmlFor="mytext" className="form-label">Enter your text here</label>
    <textarea className="form-control" id="textBox" onChange={handleChange} value={text} rows="4"></textarea>
  

     </div>
     <button type="submit" className="btn btn-danger mx-1"  onClick={handleClear}>Clear text</button> 
      <button type="submit" className="btn btn-primary mx-1"  onClick={handleUpclick}>Convert to Upper</button>
      <button type="submit" className="btn btn-primary mx-1"  onClick={handlelwclick}>Convert to Lower</button>
      <button type="submit" className="btn btn-primary mx-1"  onClick={handlerevclick}>Reverse</button>
      <button type="submit" className="btn btn-warning mx-1"  onClick={handlerenyclick}>Base64 Encryption</button>
      <button type="submit" className="btn btn-info mx-1"  onClick={handlerdenyclick}>Base64 Decryption</button>
      <button type="submit" className="btn btn-info mx-1"  onClick={handlerCopyclick}>Copy Text</button>

      <div className='container mb-4 row-3'>
      <label htmlFor="mytext2" className="form-label  "> <span>Your text summery</span></label>
      <p className="form-control" id="mytext3">{text.split(" ").length} words and  {text.length} characters.</p>
      <p className="form-control" id="mytext4">{0.008*text.split(" ").length} Min's to Read   </p>

       



      </div>
    </div>

  )
}
