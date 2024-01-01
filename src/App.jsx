import './App.css'
import styles from './layouts/AppLayout/AppLayout.module.scss'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import List from './pages/List';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/recipe",
        element: <Recipe />
      },
      {
        path: "/list",
        element: <List />
      }
    ]
  }
])
function App() {
  return (
    <div className={styles.layout}>
     <RouterProvider router={router} />

    </div>
  )
}

export default App
