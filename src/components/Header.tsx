import logo from "../resources/logo.png"
import styled from "styled-components"

const Wrapper = styled.div`
font-family: "Inter", sans-serif
z-index: 1;
margin-top: -3px;
margin-left: 5px;
font-size: 20px;
color: #353535;
display: flex;
flex-direction: row;
padding-bottom: .25rem;
padding-top: .25rem;
align-items: center;
`
const Logo = styled.img`
width: 25px;
padding: 1rem;
`


const Header = () => {
  return (
    <header>
     <Wrapper>
         <Logo src={logo} alt="Peaklingo"/>
        <p><strong>Peak</strong>Lingo</p>
      </Wrapper>
      
    </header>
  );
};

export default Header;
