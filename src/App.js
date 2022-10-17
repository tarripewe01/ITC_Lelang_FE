import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import NavigationScroll from "layout/NavigationScroll";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import Routes from "routes";
import themes from "themes";
import { loadUser } from "./store/action/authAction";
import { store } from "./store/index";
import setAuthToken from "./views/utilities/setAuthToken";

  import 'react-toastify/dist/ReactToastify.css';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const customization = useSelector((state) => state.customization);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
            <Routes />
        </NavigationScroll>
      </ThemeProvider>
      <ToastContainer />
    </StyledEngineProvider>
  );
};

export default App;
