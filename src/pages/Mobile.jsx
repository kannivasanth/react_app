// function Mobile(props){
//     return (
//         <>
//         <h1>Mobile Page</h1>
//         <h3>You have ordered {props.name} {props.spcs}</h3>
//         </>
//     )
// }
// export default Mobile


// function Mobile(x){
//     return (
//         <>
//         <h1>Mobile Page</h1>
//         <h3>You have ordered {x.name} {x.spcs}</h3>
//         </>
//     )
// }
// export default Mobile

function Mobile({name,spcs}){
    return (
        <>
        <h1>Mobile Page</h1>
        <h3>You have ordered {name} {spcs}</h3>
        </>
    )
}
export default Mobile