import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { Button } from "antd";
import Login from "./Login";

export default function Navbar() {
    const context = useContext(UserContext);
    const themeContext = useContext(ThemeContext);

    if (!context || !themeContext) return null;

    const { user, setUser } = context;
    const { toggleTheme, theme } = themeContext;

    return (
        <nav className="bg-blue-600 text-white shadow">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">

                {/* Logo */}
                <Link to="#" className="text-xl font-semibold">
                    <strong>WEB2091 App</strong>
                </Link>

                {/* Menu */}
                <div className="flex-1 flex justify-center items-center space-x-6">
                    <Link to="#">Trang chủ</Link>
                    <Link to="/list">Danh sách</Link>
                    <Link to="/add">Thêm mới</Link>
                </div>

                {/* RIGHT */}
                <div className="flex items-center space-x-3 ml-auto">

                    {/* Toggle Theme */}
                    <Button onClick={toggleTheme}>
                        {theme === "dark" ? "🌞" : "🌙"}
                    </Button>

                    {/* Login */}
                    {!user && <Login />}

                    {/* User */}
                    {user && (
                        <>
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.avatar}
                                    alt="avatar"
                                    className="h-8 w-8 rounded-full border"
                                />
                                <span>{user.name}</span>
                            </div>

                            <Button danger onClick={() => setUser(null)}>
                                Logout
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}