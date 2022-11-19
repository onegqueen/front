import styled from "styled-components";

const FooterDiv = styled.footer`
  text-align: center;
  background-color: gray;
  font-size: 1.6rem;
  height: 3rem;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div``;

const Footer = () => {
  return (
    <FooterDiv>
      <Content>Footer</Content>
    </FooterDiv>
  );
};

export default Footer;
