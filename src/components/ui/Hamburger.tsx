import styled from 'styled-components'

interface IHamburgerProps {
handleClick : () => void
}

const StyledHamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`
function Hamburger({handleClick}:IHamburgerProps) {
  return (
    <StyledHamburger onClick={handleClick}>
    <div></div>
    <div></div>
    <div></div>
  </StyledHamburger>
  )
}

export default Hamburger