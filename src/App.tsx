import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import { Layout, ConfigProvider, Button } from "antd";
import { useContext } from "react";
import { theme } from "antd";

import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import StoryForm from "./pages/Lab4";
import StoryList from "./pages/Lab5";
import EditStory from "./pages/Lab6";
import Navbar from "./components/Header";

import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

const { Header, Content, Footer } = Layout;

function App() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { themeConfig } = themeContext;
  const { token } = theme.useToken();

  return (
    <ConfigProvider theme={themeConfig}>
      <div
        style={{
          background: token.colorBgBase,
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div className="max-w-6xl mx-auto mt-10 px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Chào mừng đến với WEB2091
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link to="/lab1"><Button type="primary">Lab 1</Button></Link>
            <Link to="/lab2"><Button type="primary">Lab 2</Button></Link>
            <Link to="/lab3"><Button type="primary">Lab 3</Button></Link>
            <Link to="/lab4"><Button type="primary">Lab 4</Button></Link>
            <Link to="/lab5"><Button type="primary">Lab 5</Button></Link>
          </div>

          <Layout
            style={{ background: token.colorBgContainer }}
            className="shadow rounded-lg overflow-hidden"
          >
            <Header style={{ color: token.colorTextBase }}>
              Header
            </Header>

            <Content style={{ padding: 20 }} />

            <Footer className="text-center">
              Footer
            </Footer>
          </Layout>

          <Routes>
            <Route path="/lab1" element={<Lab1 />} />
            <Route path="/lab2" element={<Lab2 />} />
            <Route path="/lab3" element={<Lab3 />} />
            <Route path="/lab4" element={<StoryForm />} />
            <Route path="/lab5" element={<StoryList />} />
            <Route path="/edit/:id" element={<EditStory />} />
          </Routes>
        </div>

        <Toaster />
      </div>
    </ConfigProvider>
  );
}

export default App;