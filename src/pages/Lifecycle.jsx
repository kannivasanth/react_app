import React, { Component } from 'react'

export default class Lifecycle extends Component {

    constructor(props){
        super(props)
        this.state={
            count :0
        }
        console.log("component construct");
    }
    
    handleIncrement =()=>{
        this.setState({
             count: this.state.count+1
            
        })
    }
    handleDecrement = () =>{
        this.setState((x) =>{
            if(x.count>0){
                return {count : this.state.count -1}
            }
        })
    }
    handleReset=()=>{
        this.setState({
            count:0
        })
    }

    componentDidMount(){
        console.log("component mounted");
    }

    componentDidUpdate(){
        console.log("component updated & re render");
    }

    // componentWillUnmount(){
    //     console.log("component unmount");
    // }
    
  render() {
    console.log("component re-render");
    return (
      <>
      <h1>Count : { this.state.count}</h1>
      <button onClick={this.handleIncrement}>Increment</button>
      <button onClick={this.handleDecrement}>Decrement</button>
      <button onClick={this.handleReset}>Reset</button>
      </>
    )
  }
}