import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
    <BrowserRouter>
      <section>
        <Title>React + Webpack 5 boilerplate</Title>
        <Routes>
          <Route path="sign-in" element={<LoginForm />} />
          <Route path="sign-up" element={<RegisterForm />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default App;
