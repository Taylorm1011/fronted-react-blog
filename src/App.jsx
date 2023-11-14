
import NewBlog from './NewBlog'
import BlogList from './BlogList'
import SignUp from './SignUp'
import Login from './Login'
import UserProfile from './userProfile'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import SingleBlog from './SingleBlog'
import { useState } from 'react'


const BlogPost = [
  { id: 1, title: "blog1", Author: "", image: "", disc: "", imageUrl:"" },
  { id: 2, title: "blog2", Author: "", image: "", disc: "", imageUrl:"" },
  { id: 3, title: "blog3", Author: "", image: "", disc: "", imageUrl:"" },
  { id: 4, title: "blog4", Author: "", image: "", disc: "", imageUrl:""},
  { id: 5, title: "blog5", Author: "", image: "", disc: "", imageUrl:"" },
]

function App() {
  const [user, setUser] = useState()

  return (
    <BrowserRouter>
      <div>

        <header>
          <img src='public/1.png'></img>
        </header>

        
        {/* nav bar links */}
        <nav className='navbar'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/new-blog">Create Post</NavLink>
          <NavLink to="/SignUp">Sign up</NavLink>
          <NavLink to="/userProfile">Profile</NavLink>
          <NavLink to="/Login">Login</NavLink>
        </nav>
        
        {/* routes */}
        <Routes>
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/" element={<BlogList />} />
          <Route path="/userProfile" element={<UserProfile user={user} />} />
          <Route path="/SignUp" element={<SignUp setUser={setUser} />} />
          <Route path="/Login" element={<Login setUser={setUser} />} />
          <Route path="/SingleBlog/:id" element={<SingleBlog />} />

        </Routes>
        
        <div className='footer'>
          <p>
            By: Taylor McElvaine
          </p>
        </div>
      </div>

    </BrowserRouter>
  );

}

export default App;
