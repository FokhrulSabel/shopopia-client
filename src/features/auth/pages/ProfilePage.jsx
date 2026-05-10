import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h2
        className="
     text-xl
     font-bold
    "
      >
        My Profile
      </h2>

      <p>Name: {user?.name}</p>

      <p>Email: {user?.email}</p>
    </div>
  );
};

export default ProfilePage;
