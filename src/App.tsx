import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { Form, Input, Button } from "antd";
import Lab1 from "./pages/Lab1";
import { Table } from "antd";
import Lab2 from "./pages/Lab2";

const { Header, Content, Footer } = Layout;

const onFinish = (values: any) => {
  console.log(values);
};

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Age", dataIndex: "age" },
];

const data = [
  { key: 1, name: "John", age: 25 },
  { key: 2, name: "Anna", age: 30 },
];

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Chào mừng đến với WEB2091
        </h1>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button type="primary">Click me</Button>
          <Button type="primary">Click me</Button>
          <Button type="primary">Click me</Button>
          <Button type="primary">Click me</Button>
          <Button type="primary">Click me</Button>
        </div>

        <Layout className="bg-white shadow rounded-lg overflow-hidden">

          <Header style={{ color: "white" }}>
            Header
          </Header>

          <Content style={{ padding: 20 }}>

            {/* FORM */}
            <div className="max-w-md mb-6">
              <Form onFinish={onFinish} layout="vertical">
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Nhập email" }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item>
                  <Button htmlType="submit" type="primary" block>
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>

          </Content>

          <Footer className="text-center">
            Footer
          </Footer>

          <Table columns={columns} dataSource={data} />

        </Layout>

        <hr className="my-12" />

        {/* LAB1 */}
        <div className="mt-10">
          <Lab1 />
        </div>

        <hr className="my-12" />

        {/* LAB2 */}
        <div className="mt-10">
          <Lab2 />
        </div>

      </div>

      <Toaster />
    </>
  );
}

export default App;