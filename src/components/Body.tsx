import { useState, useEffect } from "react";
import styled from "styled-components";
import Hamburger from "./ui/Hamburger";


const StyledBody = styled.div`
padding-top: 20px;
padding-left:20px;
display:flex;
flex-direction:column;
justify-content: center;
`


function Body() {
  const [counter, setCounter] = useState(200);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {};

  return (
    <StyledBody>
    <Hamburger/>
    </StyledBody>
  );
}

export default Body;
