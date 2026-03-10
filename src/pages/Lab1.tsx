import { Layout, Menu, Table, Button, Modal, Form, Input } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

function Lab1() {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([
    {
      key: "1",
      name: "Nguyễn Văn A",
      email: "a@gmail.com",
      role: "Admin",
    },
    {
      key: "2",
      name: "Trần Văn B",
      email: "b@gmail.com",
      role: "User",
    },
  ]);

  const onFinish = (values: any) => {
    const newUser = {
      key: Date.now().toString(),
      ...values,
    };

    setData([...data, newUser]);
    setOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return (
    <>
      {/* Bài 1 */}
      <Layout className="bg-white rounded-lg shadow">

        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            items={[
              { key: "1", label: "Dashboard" },
              { key: "2", label: "Users" },
              { key: "3", label: "Settings" },
            ]}
          />
        </Sider>

        <Layout>

          <Header style={{ color: "white", fontSize: 18 }}>
            WEB2091 Dashboard
          </Header>

          <Content style={{ padding: 24 }}>

            {/* Bài 2 */}
            <div className="max-w-md mb-10">
              <h2 className="text-xl font-bold mb-4">
                Form Đăng ký
              </h2>

              <Form layout="vertical" onFinish={(values)=>console.log(values)}>

                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Nhập tên" }]}
                >
                  <Input />
                </Form.Item>

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

                <Button type="primary" htmlType="submit" block>
                  Đăng ký
                </Button>

              </Form>
            </div>

            {/* Bài 3 */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                Danh sách User
              </h2>

              {/* Bài 4 */}
              <Button type="primary" onClick={() => setOpen(true)}>
                Thêm User
              </Button>
            </div>

            <Table columns={columns} dataSource={data} />

          </Content>

        </Layout>
      </Layout>

      <Modal
        title="Thêm User"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Nhập email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Nhập role" }]}
          >
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Thêm
          </Button>

        </Form>
      </Modal>
    </>
  );
}

export default Lab1;