import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setUser }) => {
    let navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState()

    const handleChange = (e) => {
        setError()
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();


        // console.log(form.title, form.author, form.description);

        await axios.post("http://localhost:3000/login", form).then((res) => {
            console.log(res.data)
            if (res.data.message) {
                setError(res.data.message)
            }
            else {
                setUser(res.data.user)
                navigate("/")
            }
        })


    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
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

export default Login