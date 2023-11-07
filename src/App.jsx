import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./routes/About.jsx";
import Home from "./routes/homepage/Home.jsx";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return (
    <div className=" max-w-[100em] my-0 mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
