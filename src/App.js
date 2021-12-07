import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
    <div>
      <Title>React Webpack 5 boilerplate</Title>
      <h1 className="h1">React Webpack 5 boilerplate</h1>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default App;
