import './App.css';
import React from "react";
import Character from "./Components/Character";

function App() {

    const [data] = React.useState([{name:'Cinder', power: 'fire', color: 'orange', age: 28, moves:["Trailblazer", "Inferno", "Fire Flash"]},{name:'Aganos', power: 'rock', color: '#009999', age: 900000, moves:["Payload Assault", "Pulverize", "Ruin"]}, {name:'Jago', power: 'Tiger Spirit', color: '#336699', age: 25, moves:["Edokuken", "Tiger Fury", "Wind Kick"]}, {name:"Rex", power:"Music", color:"#F6DCB4", age: 16, moves:["Treflip","Better Writing","Fat Rip"]}, {name:"Jarino", power:"Political Theory", color:"orange", age: 19, moves:["Debate","Ignore","Wander Off"]}, {name:"Jivan", power:"Jack of Some Trades", color:"Green", age: 17, moves:["Depress","Non-specific Attraction","Quote Vine"]}]);
    
    const elements = data.map((itm,idx)=>
        <Character key={idx} data={itm}></Character>
    )

  return (
      <div className="App">
          {elements}
      </div>
  );
}

export default App;
