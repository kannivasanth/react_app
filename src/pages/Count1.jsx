import { useState } from "react"

const Count1=()=>{
    const [count, setCount1] = useState(0)
    const handleClick = ()=>setCount1(count+1)
    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={handleClick} >increment</button>
        </>
    )
}
export default Count1