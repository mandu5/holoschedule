import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { createGlobalStyle } from "styled-components";
import { isDarkAtom, isLoggedInAtom } from "./atoms";
import { authService } from "./myBase";
import Routers from "./Router";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
*[hidden] {
    display: none;
}
menu {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.2;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

function App() {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [setIsLoggedIn]);
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {init ? <Routers isLoggedIn={isLoggedIn} /> : "Loading..."}
      </ThemeProvider>
    </>
  );
}

export default App;
