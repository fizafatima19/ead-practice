import { useEffect, useState } from "react";

const FP = (props )=>{
    var counter = 0
    // var [counter, setCounter] = useState(0);
    console.log(counter )
    useEffect(
        ()=>{console.log("FP",counter)}
        ,
        [counter]
        )

    return <>
    <div>FP</div>
    <div>{props.name } is {props.age}</div>
    <div>
            <button  onClick={()=>{
counter++
            }
                }>-</button>
            <span>{counter}</span>
            <button onClick={()=>{
                console.log(counter)
counter++
            }
                }>+</button>
        </div>
    </>
}
export default FP;