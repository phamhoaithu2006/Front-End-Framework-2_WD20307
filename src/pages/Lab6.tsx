import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();


    const { data, isLoading } = useQuery({
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        },
        queryKey: ["story", id],
    })

    const [form] = Form.useForm();
    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data])

    const mutation = useMutation({
        mutationFn: async (values: any) => {
            return axios.patch(`http://localhost:3000/stories/${id}`, {
                title: values.title,
            }, values);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["stories"] });

            // quay lại list
            navigate("/lab5");
        },
    });

    const onFinish = (values: any) => {
        mutation.mutate(values);
    };

    return (
        <Form form={form} onFinish={onFinish} disabled={isLoading} layout="vertical" className="max-w-md mx-auto mt-10">
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


            <Button type="primary" htmlType="submit" loading={mutation.isPending} >
                Submit
            </Button>
        </Form>
    )
}