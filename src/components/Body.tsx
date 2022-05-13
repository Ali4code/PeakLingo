import { useState, useEffect } from "react";
import styled from "styled-components";
import HamburgerIcon from "../resources/Hamburger.png";

const Hamburger = styled.img`
  width: 30px;
  background-color: transparent;
  padding-left: 20px;
  padding-top: 20px
`;

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
    <div>
      <Hamburger
        src={HamburgerIcon}
        alt="Hamburger Icon"
        onClick={toggleMenu}
      />
    </div>
  );
}

export default Body;
