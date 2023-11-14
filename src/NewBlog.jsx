// // FormComponent.js
import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const NewBlog = () => {
    let navigate = useNavigate();

    let cloud_name = "dkrrkaben"

    const [form, setForm] = useState({
        title: '',
        author: '',
        description: '',
        imageUrl: ""
    })

    const [image, setImage] = useState()

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const cloudHandler = async (e) => {
        const formData = new FormData();

        formData.append('file', e.target.files[0]);
        formData.append("upload_preset", 'Blogimages');


        await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
            .then((res) => {
                const imageurl = res.data.secure_url;
                form.imageUrl = imageurl
                setImage(imageurl)
            }).catch(err => console.log(err))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(form.title, form.author, form.description);

        await axios.post("http://localhost:3000/new-blog", form)

        navigate("/")
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group container " >
                <label htmlFor="imageUrl"> Upload Image</label>
                <input
                    type="file"
                    className="upload-image"
                    name="image"
                    id="image"
                    onChange={cloudHandler}
                    onSubmit={handleChange}
                    required
                />


                <img src={image} className="w-200 h-100" />
            </div>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <div>
                <label>Blog:</label>
                <textarea className='blog'
                    type="text"
                    id="Blog"
                    name="Blog"
                    value={form.Blog}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewBlog
