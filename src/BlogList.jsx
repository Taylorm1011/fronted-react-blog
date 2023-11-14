import React, { useState, useEffect } from 'react'
import axios from "axios"
import BlogPost from './BlogPost'
// this component fetches a list of blogs from the server when it mounts and stores them in the component's state
const BlogList = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        const getBlogs = async () => {
            let res = await axios.get("http://localhost:3000/get-blogs");

            console.log(res.data)
            setBlogs(res.data.blogs)
        }

        getBlogs()
    }, [])

// returning bloglist
    return (
        <div>
            <h1 id='blogheader'>Blog Page</h1>

            <div className='blogList'>
                {blogs.map(blog => {
                    return (
                        <BlogPost id={blog._id} title={blog.title} description={blog.description} imageUrl={blog.imageUrl} author={blog.author} />
                    )
                })}
            </div>
            
        </div>
    )
}

export default BlogList