import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'


import pages from './pages/pages.jsx';

const router = createBrowserRouter(pages)
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>
);
