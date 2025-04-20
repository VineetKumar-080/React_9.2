import { useState, useEffect} from "react";

function App() {
  return <div>
    <Counter></Counter>
  </div>
}


// mounting, re-rendering, unmounting
function Counter(){

  // const [state, setState] = useState(initialValue); syntax
  const [count, setCount] = useState(0);


  // hooking into the lifecycle events of react
  console.log("Counter");

  // Guard our setInterval from re-rendering
  useEffect(function(){
    setInterval(function(){
      setCount(count => count + 1);
    },1000)
    console.log("mounted");
    // mounting only done once,
  }, [])


  return <div>
    <h1 id="text">{count}</h1>
  </div>
}

export default App
