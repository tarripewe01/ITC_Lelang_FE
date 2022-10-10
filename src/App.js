import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Routes from "routes";
import themes from "themes";
import NavigationScroll from "layout/NavigationScroll";
import setAuthToken from "./views/utilities/setAuthToken";
import { loadUser } from "./store/action/authAction";
import { useEffect } from "react";
import { store } from "./store/index";

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
    </StyledEngineProvider>
  );
};

export default App;
