import React from 'react'
class Count extends React.Component{
    state = {
        count : 0
    }
    handleIncrement = () =>{
        this.setState({
            count : this.state.count +1
        })
    }
    reset = () =>{
        this.setState({
            count : 0
        })
    }
    handleDecrement = () =>{
        this.setState((prevValue) =>{
            if(prevValue.count>0){
                return {count : this.state.count -1}
            }
        })
    }
  render(){
    console.log("Render");
    return(
      <>
      <h2>Count : {this.state.count}</h2>
      <button onClick={this.handleIncrement}>Increment</button>
      <button onClick={this.reset}>Reset</button>
      <button onClick={this.handleDecrement}>Decrement</button>
      </>
    )
  }
}
export default Count