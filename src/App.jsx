// src/App.jsx

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Home, Layout } from "./components";
import { About, Bentogrid } from "./pages";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* Define routes for other sections */}
        <Route path="experience" element={<ComingSoon title="Experience" />} />
        <Route path="projects" element={<ComingSoon title="Projects" />} />
        {/* Add more routes as needed */}
        {/* Fallback Route for Undefined Paths */}
        <Route path="*" element={<ComingSoon title="Page Not Found" />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
