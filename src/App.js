import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./index.scss";

const App = ({ onSignIn = () => {} }) => {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <Routes>
        <Route path="sign-in" element={<LoginForm onSignIn={onSignIn} />} />
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
  );
};

export default App;
