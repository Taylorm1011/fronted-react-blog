export default function UserProfile ({ user }) {

    return (
        <div className="userProfile">
        <img src={user.profileImg}  width="200px" height="200px" />
        <h2>{user.username}</h2>
        </div>
    );
}