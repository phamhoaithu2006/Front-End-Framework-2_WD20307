import { Button, Popconfirm, Space, Table, Tag } from "antd";

function Lab2() {
  // Bài 1
  const columns1 = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" },
  ];

  const data1 = [
    { id: 1, name: "Lâm", age: 25, major: "Giáo viên" },
    { id: 2, name: "Phong", age: 30, major: "Bác sỹ" },
    { id: 3, name: "Châu", age: 40, major: "Y tá" },
    { id: 4, name: "Hảo", age: 35, major: "Luật sư" },
    { id: 5, name: "Sơn", age: 20, major: "Công an" },
  ];

  // Bài 2
  const columns2 = [
    { title: "ID", dataIndex: "id" },
    { title: "Product Name", dataIndex: "productname" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];

  const data2 = [
    { id: 1, productname: "Hiếu", price: 2500, category: "Quần áo" },
    { id: 2, productname: "Mai", price: 3000, category: "Thức uống" },
    { id: 3, productname: "Đào", price: 4000, category: "Đồ ăn" },
    { id: 4, productname: "Linh", price: 3500, category: "Giày dép" },
    { id: 5, productname: "Trang", price: 2000, category: "Mỹ phẩm" },
  ];

  // Bài 3
  const columns3 = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link">Edit</Button>
          <Popconfirm
            title="Xác nhận xóa"
            description="Bạn có chắc chắn muốn xóa không?"
            okText="Có"
            cancelText="Không"
          >
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const data3 = [
    { id: 1, name: "Lâm", email: "l@example.com", status: "active" },
    { id: 2, name: "Phong", email: "p@example.com", status: "inactive" },
    { id: 3, name: "Châu", email: "c@example.com", status: "active" },
    { id: 4, name: "Hải", email: "h@example.com", status: "inactive" },
    { id: 5, name: "Sơn", email: "s@example.com", status: "active" },
  ];

  return (
    <>
      <Table columns={columns1} dataSource={data1} />
      <Table columns={columns2} dataSource={data2} pagination={{ pageSize: 3 }} />
      <Table columns={columns3} dataSource={data3} />
    </>
  )
}

export default Lab2;
