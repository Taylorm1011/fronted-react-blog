import React, {useState} from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"

const SignUp = ({ setUser }) => {
    let navigate = useNavigate();

    let cloud_name = "dkrrkaben"

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        profileImg: ""
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
                form.profileImg = imageurl
                setImage(imageurl)
            }).catch(err => console.log(err))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(form.title, form.author, form.description);

        await axios.post("http://localhost:3000/signup", form).then(res => {
            setUser(res.data.user)
        })
        
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group container " >
                <label htmlFor="imageUrl"> Upload Image</label>
                <input
                    type="file"
                    className="form-control"
                    name="image"
                    id="image"
                    onChange={cloudHandler}
                    onSubmit={handleChange}
                    required

                />

                <img src={image} className="w-200 h-100" />
            </div>
            <div>
                <label>username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUp