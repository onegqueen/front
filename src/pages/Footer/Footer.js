import styled from "styled-components";

const FooterDiv = styled.footer`
  text-align: center;
  background-color: #395b64;
  font-size: 1.6rem;
  height: 3rem;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <Content>Copyright Wap2</Content>
    </FooterDiv>
  );
};

export default Footer;
