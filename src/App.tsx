import { useState } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState<number>(10000);

  return (
    <div>
      <Header counter={counter} />
      <Body setCounter={setCounter}/>
      <Footer/>
    </div>
  );
}

export default App;
