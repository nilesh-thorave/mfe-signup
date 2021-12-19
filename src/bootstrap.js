import { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  MemoryRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import App from "./App";

function AppWrapper({ onNavigate, parentPath, onSignIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    onNavigate(location);
  }, [location]);

  useEffect(() => {
    const { pathname } = location;
    if (pathname !== parentPath) {
      navigate(parentPath);
    }
  }, [parentPath]);
  return <App onSignIn={onSignIn} />;
}

// Mount function to start up the app
const mount = (el, { onNavigate, onSignIn, currentPath } = {}) => {
  ReactDOM.render(
    <MemoryRouter initialEntries={[currentPath]}>
      <AppWrapper
        onNavigate={onNavigate}
        parentPath={currentPath}
        onSignIn={onSignIn}
      />
    </MemoryRouter>,
    el
  );
};

// If we are in development and in isolation,
// render immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth_app_root");

  if (devRoot) {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      devRoot
    );
  }
}

// We are running through container
// and we should export the mount function
export { mount };
