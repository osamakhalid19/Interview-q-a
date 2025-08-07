import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Home'
import Terms from './Components/Terms'
import AboutUs from './Components/AboutUs'
import QuestionCategories from './Components/Questions'
import SingleQuestion from './Components/SingleQuestion'
import ReactGA from 'react-ga4';

function App() {
ReactGA.initialize("G-632V3JW482"); 
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/privacy-policy",
    element: <Terms/>
  },
  {
    path:"/about-us",
    element: <AboutUs/>
  },
  {
    path:"/interview-prep",
    element: <QuestionCategories/>
  },
  {
    path:"/interview-prep/:category",
    element: <SingleQuestion/>
  }
])
  return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}

export default App
