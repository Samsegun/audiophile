import React from "react";

const TestBtn: React.FC<{count:number, clickHandler:() => void}> = (props) => {
    return ( 
        <button onClick={props.clickHandler}>
            my count is {props.count}
        </button>
     );
}
 
export default TestBtn;