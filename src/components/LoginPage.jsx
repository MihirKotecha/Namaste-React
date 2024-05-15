import UserContext from "../utils/UserContext";
import { useContext } from "react";

const LoginPage = () => {
  const { setUserName } = useContext(UserContext);
  return (
    <div className="m-4 p-4 h-screen flex justify-center items-center">
      <input
        placeholder="Enter the name of the user"
        className="p-4 m-4 border-solid border-2 border-gray-300 rounded-lg h-10 w-96"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default LoginPage;
