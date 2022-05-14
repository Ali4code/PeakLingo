import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 50vh;
  width: 30vh;
  text-align: left;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;
function SideMenu() {
  return (
    <StyledMenu>
      <a href="/">About us</a>
      <a href="/">Log in</a>
      <a href="/">Register</a>
      <a href="/">Contact Us</a>
    </StyledMenu>
  );
}

export default SideMenu;
