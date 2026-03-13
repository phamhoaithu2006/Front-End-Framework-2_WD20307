import { Form, Input, Button, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const onFinish = (values: any) => {
    console.log(values);

  const box = document.getElementById("result");
  if (box) {
    box.innerHTML = `
      <p><b>Title:</b> ${values.title}</p>
      <p><b>Slug:</b> ${values.slug}</p>
      <p><b>Category:</b> ${values.category}</p>
      <p><b>Content:</b> ${values.content}</p>
      <img src="${values.image}" width="200"/>
    `;
  }
};


function Lab3() {
    return (
        <>
            Bài 1
            <div className="max-w-md mb-6">
                <Form onFinish={onFinish} layout="vertical">
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Nhập email" },
                        { type: "email", message: "Email không hợp lệ" }
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Nhập password" }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType="submit" type="primary" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            Bài 2
            <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
                <Form.Item
                    label="Tên"
                    name="name"
                    rules={[{ required: true, message: "Nhập tên" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Nhập email" },
                    { type: "email", message: "Email đúng định dạng" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="SĐT"
                    name="phone"
                    rules={[{ required: true, message: "Nhập SĐT" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Mật khẩu" name="password"
                    rules={[{ required: true, message: "Nhập mật khẩu" },
                    { min: 6, message: "Tối thiểu 6 ký tự" }
                    ]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Nhập lại mật khẩu"
                    name="confirmPassword"
                    rules={[
                        { required: true, message: "Vui lòng nhập mật khẩu" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) return Promise.resolve();
                                return Promise.reject(new Error('Mật khẩu không khớp'));
                            }
                        })
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form >

            Bài 3
            <div className="max-w-md mb-6">
                <Form onFinish={onFinish} layout="vertical">
                    <Form.Item
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Nhập tên sản phẩm" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Giá"
                        name="price"
                        rules={[{ required: true, message: "Nhập giá" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Số lượng"
                        name="quantity"
                        rules={[{ required: true, message: "Nhập sô lượng" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mô tả"
                        name="describe"
                        rules={[{ required: true, message: "Nhập số lượng" }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType="submit" type="primary" block>
                            Thêm sản phẩm
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            Bài 4
            <Form layout="vertical" onFinish={onFinish}>

                <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Slug" name="slug" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Category" name="category" rules={[{ required: true }]}>
                    <Select
                        options={[
                            { label: "Tin tức", value: "news" },
                            { label: "Công nghệ", value: "tech" },
                            { label: "Giải trí", value: "entertainment" },
                        ]}
                    />
                </Form.Item>

                <Form.Item label="Content" name="content" rules={[{ required: true }]}>
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Image URL" name="image" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>

                 <div id="result" style={{ marginTop: 20 }}></div>

            </Form>

        </>
    );
}

export default Lab3;