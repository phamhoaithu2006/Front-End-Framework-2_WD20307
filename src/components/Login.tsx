import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "antd";

const Login = () => {
  const context = useContext(UserContext);
  if (!context) return null;

  const { setUser } = context;

  return (
    <Button
      type="primary"
      onClick={() =>
        setUser({
          name: "phthu",
          avatar: "https://i.pravatar.cc/150",
        })
      }
    >
      Login
    </Button>
  );
};

export default Login;