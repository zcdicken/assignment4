import React from "react";

function Character(props) {

    const [data] = React.useState(props.data.moves);
    const [flip, flipIt] = React.useState(false);

    const toggle=()=>{
        if(flip === true) {
            flipIt(false);
        } else {
            flipIt(true);
        }
    }

    const elements = data.map((itm,idx)=>
        <p key={idx} data={itm}>{itm}</p>
    )

    if(props.data.age > 50) {
        props.data.age = "I am too old";
    }

    let style = {
        display:"block",
        minHeight: "100px",
        maxWidth: "200px",
        borderStyle: "solid",
        borderWeight: "2px",
        backgroundColor: props.data.color,
    }
    return(
        <div className={"Character"} style={style} onClick={()=>toggle()}>
            <p>Name: {props.data.name}</p>
            <p>Superpower: {props.data.power}</p>
            <p>Age: {props.data.age}</p>
            <p>Special Moves:</p>
            {elements}
            {flip && <p>My power is {props.data.power}</p>}
        </div>
    )
}

export default Character;