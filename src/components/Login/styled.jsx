import styled, { css } from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 40px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
`;

const Form = styled.form`
  width: 400px;
  height: 600px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-top: 67px;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #262626;
`;

const Input = styled.input`
  display: flex;
  border-radius: 8px;
  padding: 10px;
  //margin-top: 8px;
  border: 1px solid #e2e8c0;
  width: 100%;
  height: 50px;

  & + & {
    margin-top: 1rem;
  }
`;

const LoginButton = styled.div`
  height: 48px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  color: black;
`;

const RegisterButton = styled.div`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: 700;
  background-color: #d266f0;
  border-radius: 64px;
  color: white;
  margin-bottom: 16px;
  text-align: center;
  cursor: pointer;
`;

const snsLogin = styled.button``;

const S = {
  Container,
  Form,
  Title,
  Input,
  LoginButton,
  RegisterButton,
  snsLogin,
};

export default S;
