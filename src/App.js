import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { createGlobalStyle } from "styled-components";
import { isDarkAtom, isLoggedInAtom } from "./atoms";
import { authService } from "./myBase";
import Routers from "./Router";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import icon from "./routes/icon.ico";

const GlobalStyle = createGlobalStyle`
  body, h1, ul{
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  * {
  font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  const [userObj, setUserObj] = useState(null);
  const [init, setInit] = useState(false);
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const isDark = useRecoilValue(isDarkAtom);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [setIsLoggedIn]);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Holo Schedules</title>
            <link rel="icon" type="image/png" href={icon} sizes="16x16" />
          </Helmet>
        </HelmetProvider>
        {init ? <Routers isLoggedIn={isLoggedIn} userObj={userObj} /> : ""}
      </ThemeProvider>
    </>
  );
}

export default App;
