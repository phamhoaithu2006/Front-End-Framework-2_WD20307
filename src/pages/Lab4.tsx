import { Form, Input, Button, Checkbox, Select } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

type Story = {
    title: string;
    author: string;
    image: string;
    content: string;
    categoryId: number;
    active?: boolean;
};

type Category = {
    id: number;
    name: string;
};

export default function StoryForm() {
    const { data: categories } = useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data;
        },
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (data: Story) => {
            const res = await axios.post("http://localhost:3000/stories", data);
            return res.data;
        },

        onSuccess: () => {
            toast.success("Thêm truyện thành công");

            queryClient.invalidateQueries({ queryKey: ["getAllStories"] });
        },

        onError: () => {
            toast.error("Có lỗi xảy ra");
        },
    });

    const onFinish = (values: Story) => {
        mutation.mutate(values);
    };

    return (
        <div className="grid grid-cols-2 gap-8">

            {/* LEFT - CATEGORY */}
            <div className="p-6 border rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Quản lý danh mục</h2>

                <Form layout="vertical" onFinish={(values) => console.log(values)}>
                    <Form.Item
                        label="Tiêu đề"
                        name="name"
                        rules={[{ required: true, message: "Nhập tên danh mục" }]}
                    >
                        <Input placeholder="Tên danh mục" />
                    </Form.Item>

                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Form.Item name="active" valuePropName="checked">
                        <Checkbox>Kích hoạt</Checkbox>
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block>
                        Lưu
                    </Button>
                </Form>
            </div>

            {/* RIGHT - STORY */}
            <div className="p-6 border rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Thêm mới</h2>

                <Form layout="vertical" onFinish={onFinish}>

                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                            label="Tiêu đề"
                            name="title"
                            rules={[{ required: true, message: "Nhập tên truyện" }]}
                        >
                            <Input placeholder="Tên truyện" />
                        </Form.Item>

                        <Form.Item
                            label="Tác giả"
                            name="author"
                        >
                            <Input placeholder="Tên tác giả" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="Chọn danh mục"
                        name="categoryId"
                        rules={[{ required: true, message: "Chọn danh mục" }]}
                    >
                        <Select
                            placeholder="Chọn danh mục"
                            options={categories?.map((c) => ({
                                label: c.name,
                                value: c.id,
                            }))}
                        />
                    </Form.Item>

                    <Form.Item label="Link hình ảnh" name="image">
                        <Input placeholder="Link URL" />
                    </Form.Item>

                    <Form.Item label="Nội dung" name="content">
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block loading={mutation.isPending}>
                        Thêm
                    </Button>
                </Form>
            </div>

        </div>
    );
}