/*IMPORT STYLE*/
import './App.css'

/*IMPORT UTILITIES*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useState} from 'react'
import GlobalContext from './context/GlobalContext'

/*IMPORT BASE LAYOUT*/
import Blank from './layouts/Blank'
import Default from './layouts/Default'

/*IMPORT PAGES*/
import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import Posts from './pages/Posts/PostsPage'
import NotFound from './pages/NotFound/NotFound'
import Post from "./pages/Posts/Post/Post"

export const API_BASE_URI = 'http://localhost:3000/'

function App() {

  const [posts, setPosts] = useState([])

  function fetchPosts(){
    axios.get(`${API_BASE_URI}posts`)
        .then(res => {
            console.log("fetch posts")
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err => {
            console.error(err)
        })
  }
  return (
    <GlobalContext.Provider value={{posts, setPosts, fetchPosts}}>
      <BrowserRouter>
        <Routes >
          <Route element={<Default/>}>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/posts'>
              <Route index Component={Posts}></Route>
              <Route path=":id" Component={Post}></Route>
            </Route>
            <Route path='/about-us' element={<About/>}></Route>
          </Route>
          <Route element={<Blank/>}>
            <Route path='*' element={<NotFound/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
