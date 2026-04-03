import { Link, useNavigate } from "react-router-dom";
import { Button, Space, Avatar, Switch, message } from "antd";
import { useAuthStore } from "../stores/useAuthStore";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { isDarkMode, toggleTheme } = themeContext;

  const handleLogout = () => {
    logout();
    message.success("Đăng xuất thành công");
    navigate("/");
  };

  return (
    <nav
      className="shadow"
      style={{
        background: isDarkMode ? "#141414" : "#1677ff",
        color: "#fff",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-semibold text-white">
            WEB2091 App
          </Link>

          <Link to="/" className="text-white">Trang chủ</Link>
          <Link to="/lab5" className="text-white">Danh sách</Link>
          <Link to="/lab4" className="text-white">Thêm mới</Link>
        </div>

        {/* RIGHT */}
        <Space>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren="Tối"
            unCheckedChildren="Sáng"
          />

          {user ? (
            <>
              <Avatar>
                {user.email.charAt(0).toUpperCase()}
              </Avatar>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#fff" }}>
                  Hi, {user.email}
                </span>
                <span style={{ fontSize: "0.8rem", color: "#52c41a" }}>
                  Đã đăng nhập
                </span>
              </div>

              <Button danger onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <span style={{ color: "#fff" }}>Chưa đăng nhập</span>

              <Link to="/login">
                <Button>Login</Button>
              </Link>

              <Link to="/register">
                <Button type="primary">Register</Button>
              </Link>
            </>
          )}
        </Space>
      </div>
    </nav>
  );
}