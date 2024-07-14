import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import Layout from "./Layout.jsx";
  import Home from "./component/home/Home.jsx"
  import About from "./component/about/About.jsx";
  import SocialMedia from "./component/socialMedia/Github.jsx";
  import Game1 from "./component/game/Game1.jsx"
  import Game2 from "./component/game/Game2.jsx"
  import Data from './component/game/data'

  import { useEffect,useState } from "react";
  import { ThemeProvider } from "./context/Themes.jsx";


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="socialMedia" element={<SocialMedia />} />
        <Route path="game1" element={<Game1 />} />
        <Route path="game2" element={<Game2 data={Data}/>} />
      </Route>
    )
  );
function App() {
    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = () => {
      setThemeMode("light");
    };
    const darkTheme = () => {
      setThemeMode("dark");
    };
  
    //actual theme change
  
    useEffect(() => {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
       <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
