import logo from "../resources/logo.png";
import styled from "styled-components";

interface IHeaderProps {
  counter: number;
}

const RootWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

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
`;
const StyledP = styled.p`
  padding: 0 70px;
  font-size: 30px;
  font-weight: 700;
`;
const Logo = styled.img`
  width: 25px;
  padding: 1rem;
`;

const Header = ({ counter }: IHeaderProps) => {
  return (
    <RootWrapper>
      <Wrapper>
        <Logo src={logo} alt="Peaklingo" />
        <p>
          <strong>Peak</strong>Lingo
        </p>
      </Wrapper>
      <StyledP>{counter}</StyledP>
    </RootWrapper>
  );
};

export default Header;
