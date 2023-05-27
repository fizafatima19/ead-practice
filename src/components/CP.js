import { Component, useEffect } from "react";


export class CP extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter :0,
           
        }
        
    }
    render(){
        
        // const {a,b:{c:{d}}} = this.props.obj;
        console.log(this.state.ammar,this.state.counter)
        

        return <>
        {/* <div>CP {d}</div> */}
        <div>
            <button onClick={()=>{this.setState((prev)=>{
                return {counter: prev.counter-1}
            })}}>-</button>
            <span>{this.state.counter}</span>
            <button onClick={()=>{this.setState((prev)=>{
                return {counter: prev.counter+1}
            })}}>+</button>
        </div>
        </>
    }
}
