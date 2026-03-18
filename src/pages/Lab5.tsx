import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Table, Image, Button, Popconfirm, Input } from "antd";
import axios from "axios";
import { useState } from "react";

export default function StoryList() {
    const [keyword, setKeyword] = useState("");

    const queryClient = useQueryClient();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["getAllStories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });

    const handleDelete = async (id: number) => {
        await axios.delete(`http://localhost:3000/stories/${id}`);

        queryClient.invalidateQueries({ queryKey: ["getAllStories"] });
    };

    const filteredData = data?.filter((item: any) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    const columns = [
        {
            title: "Tên truyện",
            dataIndex: "title",
        },
        {
            title: "Tác giả",
            dataIndex: "author",
        },
        {
            title: "Hình ảnh",
            dataIndex: "image",
            render: (src: string) => <Image src={src} height={100} />,
        },
        {
            title: "Ngày tạo",
            dataIndex: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString("vi-VN")
        },
        {
            title: "Action",
            render: (_, record) => (
                <Popconfirm
                    title="Xác nhận xóa"
                    description="Bạn có chắc chắn muốn xóa không?"
                    okText="Có"
                    cancelText="Không"
                    onConfirm={() => handleDelete(record.id)}
                >
                    <Button danger>Xóa</Button>
                </Popconfirm>
            ),
        }
    ];

    if (isError) {
        return <div>Có lỗi xảy ra</div>;
    }
    return (
        <>
            <Input
                placeholder="Tìm theo tên truyện"
                style={{ width: 300, marginBottom: 16 }}
                allowClear
                onChange={(e) => setKeyword(e.target.value)}
            />

            <Table
                columns={columns}
                dataSource={filteredData}
                rowKey="id"
                loading={isLoading}
                pagination={{ pageSize: 5 }}
            />
        </>
    );
}

