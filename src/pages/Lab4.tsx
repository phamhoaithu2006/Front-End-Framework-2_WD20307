import { Form, Input, Button, Checkbox, Select } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

type Story = {
    title: string;
    description: string;
    active: boolean;
    category: number;
}

export default function StoryForm() {
    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data;
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: Story) => {
            const res = await axios.post("http://localhost:3000/categories", data);
            return res.data;
        },

        onSuccess: () => {
            toast.success("Thêm truyện thành công");
        },

        onError: () => {
            toast.error("Có lỗi xảy ra");
        },
    });

    const onFinish = (values: Story) => {
        mutation.mutate(values);
    };

    return (
        // Bài 1
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
            <Form.Item
                label="Tên truyện"
                name="title"
                rules={[{ required: true, message: "Nhập tên truyện" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Mô tả" name="description">
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item label="Danh mục" name="category">
                <Select
                    placeholder="Chọn danh mục"
                    options={categories?.map((category: any) => ({
                        label: category.name,
                        value: category.id,
                    }))}
                />
                <Input />
            </Form.Item>

            <Form.Item label="Active" name="active" valuePropName="checked">
                <Checkbox />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={mutation.isPending}>
                Thêm truyện
            </Button>
        </Form>
    );
}