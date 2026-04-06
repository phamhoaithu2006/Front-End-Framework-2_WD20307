import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateStory } from "../hooks/useUpdateStory";

export function EditStory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const { data } = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        },
        enabled: !!id,
    });

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data, form]);

    const { mutate } = useUpdateStory();

    const onFinish = (values: any) => {
        mutate(
            { id, ...values },
            {
                onSuccess: () => {
                    navigate("/list");
                },
            }
        );
    };

    return (
        <Form form={form} onFinish={onFinish} layout="vertical" className="max-w-md mx-auto mt-10">
            <Form.Item
                name="title" label="Tên truyện"
                rules={[{ required: true, message: "Nhập tên truyện" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="author" label="Tác giả"
                rules={[{ required: true, message: "Nhập tác giả" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item name="image" label="Ảnh">
                <Input />
            </Form.Item>

            <Form.Item name="createdAt" label="Ngày tạo">
                <Input />
            </Form.Item>


            <Button type="primary" htmlType="submit" >
                Submit
            </Button>
        </Form>
    )
}