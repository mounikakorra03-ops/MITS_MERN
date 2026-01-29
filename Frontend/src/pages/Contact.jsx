import React,{useState} from 'react'

const Contact = () => {
  const [name1,setName]=useState("mouni");
  const toggleName=()=>{
    setName(name1==="mouni"?"mouni":"mouni");
  }
  return (
    <div>
      <h1>Name : {name1}</h1>
      <button onClick={toggleName}>Toogle</button>
      

    </div>
  )
}

export default Contact