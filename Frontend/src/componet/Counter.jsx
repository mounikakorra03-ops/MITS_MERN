import  React from 'react'
import {useState} from 'react'
const Counter = () => {
    const[count,setCount]=useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onclick={()=>{setCount(count-1)}}>Decrement</button>
            <button onClick={()=>{setcount(0)}}>Reset</button>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
              
    </div>
    )
}
export default App