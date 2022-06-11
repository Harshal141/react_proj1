import React ,{useState}from 'react'

export default function Form(props) {
    const click = ()=>{
        setText(text.toUpperCase())
        props.show("Converted to uppercase","success")
    }
    const change = (e)=>{
        setText(e.target.value)
        let arr = text.split(" ")
      let count = 0
      for(let i=0;i<arr.length;++i){
        if(arr[i]==''){
          count++
        }
      }
      setWords(arr.length - count)
    }
    const finder = ()=>{
      let find = document.querySelector('.search').value
      let replace = document.querySelector('.replace').value
      let str = text.replace(find,replace)
      setText(str)
      props.show(`${find} replaced with ${replace}`,"success")
      }
    const filter = ()=>{
      setText(text.replace(/ +/g," "))
      props.show("Extra spaces removed","success")
    }

    const [words,setWords] = useState(0)
    const [text,setText]=useState("");
    
  return (
    <>
    <div className="container">
      <div className="form-group">
        {/* we use double curly cause we need to pass in a dictionary//object */}
      <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#262626':'#fff',color: props.mode==='dark'?'#fff':'black'}} value={text} onChange={change} id="exampleFormControlTextarea1" placeholder="Enter Text Here" rows="6"></textarea>
      </div>
    <div className="row">
    <div className="col">
      <input type="text" className="form-control search" placeholder="Search"/>
    </div>
    <div className="col">
      <input type="text" className="form-control replace" placeholder="Replace"/>
    </div>
  </div><br />
  <button className="btn btn-primary my-2" onClick={click}>Convert To Uppercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={finder}>Search and Replace</button>
    <button className="btn btn-primary my-2" onClick={filter}>Remove Extra Spaces</button>
    <button className="btn btn-primary my-2 mx-2" onClick={filter}>Clear</button>

  </div>
    <div className="container my-2">
      <p>{text.length} characters,{words} words</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  )
}
