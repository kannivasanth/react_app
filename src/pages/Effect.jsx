import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [increment, setincrement] = useState(0)
    const [decrement, setdecrement] = useState(10)

    // 1
    useEffect(()=>{
        console.log("use effect calling");
    },[])

    // // 2
    // useEffect( ()=>{
    //     console.log("use effect calling");
    // } , [])

    // // 3
    // useEffect( ()=>{
    //     console.log("use effect calling");
    // } , [decrement])

    console.log("re-render");
    
  return (
    <>
    <h1>Increment : {increment}</h1>
    <button onClick={()=>setincrement(increment+1)}>Increment</button>
    <h1>Decrement : {decrement}</h1>
    <button onClick={()=>setdecrement(decrement-1)}>Decrement</button>
    </>
  )
}

export default Effect