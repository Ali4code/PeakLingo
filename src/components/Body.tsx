import { useEffect, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import Hamburger from "./ui/Hamburger";
import SideMenu from "./ui/SideMenu";

interface IBodyProps {
  setCounter: Dispatch<SetStateAction<number>>;
}

const StyledBody = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  min-height: 80vh;
`;

function Body({ setCounter }: IBodyProps) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const handleClick = () => {
    setShowSideMenu((prevState) => !prevState);
  };

  return (
    <StyledBody>
      <Hamburger handleClick={handleClick} />
      {showSideMenu && <SideMenu />}
    </StyledBody>
  );
}

export default Body;
