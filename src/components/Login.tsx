import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/useAuthStore";
import axios from "axios";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      const res = await axios.post("http://localhost:3000/login", values);
      return res.data;
    },
    onSuccess: (data) => {
      setUser({
        user: {
          email: data.user.email,
          name: data.user.username || "User",
        },
        token: data.accessToken,
      });

      message.success("Đăng nhập thành công");
      navigate("/");
    },
    onError: () => {
      message.error("Email hoặc mật khẩu không đúng");
    },
  });

  return (
    <Form
      layout="vertical"
      onFinish={mutate}
      style={{ maxWidth: 400, margin: "50px auto" }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Nhập password" }]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={isPending} block>
        Đăng nhập
      </Button>
    </Form>
  );
};

export default Login;