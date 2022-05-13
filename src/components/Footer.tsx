import styled from "styled-components"

const Wrapper = styled.div`
font-family: "Inter", sans-serif;
z-index: 1;
margin-top: -3px;
margin-left: 5px;
font-size: 20px;
color: #353535;
display: flex;
flex-direction: row;
justify-content: center;
padding-bottom: .25rem;
padding-top: .25rem;
align-items: center;

p {
  padding: 10px;
}
`

function Footer() {
  return (
    <Wrapper>
        <p>@2022</p>
        <p>PeakLingo Test</p>
        <p>Contact Me: Ali4Bcup@gmail.com</p>
        <p>github: github.com/ali4code</p>
    </Wrapper>
  )
}

export default Footer