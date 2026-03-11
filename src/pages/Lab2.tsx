import { Table } from "antd";

function Lab2() {
    const columns = [
        { title: "ID", dataIndex: "id" },
        { title: "Name", dataIndex: "name" },
        { title: "Age", dataIndex: "age" },
        { title: "Major", dataIndex: "major" },
    ];

    const data = [
        { id: 1, name: "John", age: 25, major: "FE1" },
        { id: 2, name: "Anna", age: 30, major: "FE2"},
        { id: 3, name: "Lissa", age: 40, major: "BE1"},
        { id: 4, name: "Nalo", age: 35, major: "BE2"},
        { id: 5, name: "Misaa", age: 20, major: "BE3"},
    ];

    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default Lab2;
