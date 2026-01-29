 import React from 'react'

import {useNavigate} from 'react-router-dom'
 const Home = ({name}) => {
    const navigate=useNavigate();
    const handleclick=()=>{
        navigate('/About')
    }
    return(
        <div>
        <h1>Name:{name}</h1>
            <button onclick={handleclick}>Go to About page</button>
            <About name ={name}/>
            <About name ={name}/>
            <About name ={name}/>
        </div>

    )
}
export default Home

