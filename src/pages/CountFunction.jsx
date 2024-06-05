// import React, { useState } from 'react'
// const CountFunction = () => {
//     const [count,setcount] = useState(0)
//   return (
//     <>
//     <h2>Count : {count}</h2>
//     <button onClick={()=>{setcount(count+1)}}>Increment</button>
//     <button onClick={()=>{if(count > 0){setcount(count-1)}}}>Decrement</button>
//     <button onClick={()=>{setcount(0)}}>Reset</button>
//     </>
//   )
// }
// export default CountFunction

import React, { useState } from 'react'
const CountFunction = () => {
    const [count,setcount] = useState(0)
    const [name, setname] = useState("Kanniappan")
    const [array, setarray] = useState([25,10])
    // function handleIncrement(){
    //     setcount(count+1)
    // }
    const handleIncrement = () =>{
        setcount(count+1)
    }
    const handleDecrement = () =>{
        if(count > 0){
            setcount(count-1)
        }
    }
    const handleReset = () =>{
        setcount(0)
    }
    const handleChangeName = () =>{
        setname("Muthamizh Selvan")
    }
    const handlePrevName = () =>{
        setname("Kanniappan")
    }

    const handleArray = () =>{
        setarray([...array,Math.floor(Math.random()*100)])
    }
  return (
    <>
    <h2>Count : {count}</h2>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    <hr />
    <h1>Name : {name} </h1>
    <button onClick={handleChangeName}>Change Name</button>
    <button onClick={handlePrevName}>Prev Name</button>
    <hr />
    <h1>{JSON.stringify(array)}</h1>
    <button onClick={handleArray}>Change Array</button>
    </>
  )
}
export default CountFunction






