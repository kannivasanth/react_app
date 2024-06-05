import React from 'react'
class Payment extends React.Component{
  render(){
    return(
      <>
      <h1>Payment Page</h1>
      <h3>you have to pay {this.props.price}  to our delivery partner</h3>
      <h3>Time of product arrival {this.props.eta}</h3>
      </>
    )
  }
}
export default Payment

// props 
