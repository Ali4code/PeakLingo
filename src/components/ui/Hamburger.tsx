import styled from 'styled-components'

interface IHamburgerProps {
handleClick : () => void,
itemScope: boolean
}

export const StyledHamburger = styled.button`
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
  

  :first-child {
      transform: ${(props) => props.itemScope ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${(props) => props.itemScope ? '0' : '1'};
      transform: ${(props) => props.itemScope ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${(props) => props.itemScope ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
function Hamburger({handleClick , itemScope}:IHamburgerProps) {
  return (
    <StyledHamburger onClick={handleClick} itemScope={itemScope}>
    <div></div>
    <div></div>
    <div></div>
  </StyledHamburger>
  )
}

export default Hamburger