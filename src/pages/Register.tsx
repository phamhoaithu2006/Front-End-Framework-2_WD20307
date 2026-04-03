import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const setUser = useAuthStore((state) => state.setUser);
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: async (values: { username: string; email: string; password: string }) => {
            const res = await axios.post("http://localhost:3000/register", values);
            return res.data;
        },
        onSuccess: (data) => {
            setUser({
                user: {
                    email: data.user.email,
                    name: data.user.username || "User mới",
                },
                token: data.accessToken,
            });

            message.success("Đăng ký thành công!");
            navigate("/");
        },
        onError: () => {
            message.error("Đăng ký thất bại!");
        },
    });

    return (
        <Form
            layout="vertical"
            onFinish={mutate}
            style={{ maxWidth: 400, margin: "50px auto" }}
        >
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                <Input.Password />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={isPending} block>
                Đăng ký
            </Button>
        </Form>
    );
}