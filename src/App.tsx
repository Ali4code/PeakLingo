import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState<number>(200);

  return (
    <div>
      <Header counter={counter} />
      <Body setCounter={setCounter}/>
    </div>
  );
}

export default App;
