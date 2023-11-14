import { useNavigate } from "react-router-dom";

export default function BlogPost ({ id, title,description,author, imageUrl}) {
    let navigate = useNavigate();
    //Blohpost return
    return (
        <div className="Blogpost" onClick={() => navigate(`/SingleBlog/${id}`)}>
        <img src={imageUrl} />
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{description}</p>
        </div>
    );
}