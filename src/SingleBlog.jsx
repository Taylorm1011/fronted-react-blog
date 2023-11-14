import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SingleBlog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState()

  useEffect(() => {
    axios.get(`https://backend-react-blog.onrender.com/blog/${id}`).then(res => {
      console.log(res.data.blog)
      setBlog(res.data.blog)

    })
  }, [])


  if (blog) {
    return (
      <div className='singleBlog'>
        <img src={blog.imageUrl} />
        <h3>{blog.title}</h3>
        <h4>{blog.author}</h4>
        <p>{blog.Blog}</p>
      </div>
    )
  }
}

export default SingleBlog
