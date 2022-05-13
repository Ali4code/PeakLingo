import {useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Hamburger from "./ui/Hamburger";

interface IBodyProps {
  setCounter: Dispatch<SetStateAction<number>>;
}

const StyledBody = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  min-height: 80vh;
`;

function Body({setCounter }: IBodyProps) {
 
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {};

  return (
    <StyledBody>
      <Hamburger />
    </StyledBody>
  );
}

export default Body;
