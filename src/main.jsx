import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App'
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Layout from "./Layout.jsx";
// import Home from "./component/home/Home.jsx"
// import About from "./component/about/About.jsx";
// import SocialMedia from "./component/socialMedia/Github.jsx";
// import Game1 from "./component/game/Game1.jsx"
// import Game2 from "./component/game/Game2.jsx"
// import Data from './component/game/data'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="socialMedia" element={<SocialMedia />} />
//       <Route path="game1" element={<Game1 />} />
//       <Route path="game2" element={<Game2 data={Data}/>} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>
);
