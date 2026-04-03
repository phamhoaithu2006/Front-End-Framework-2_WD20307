import { createContext, useState } from "react";

export const UserContext = createContext<any>(null);

export function UserProvider({ children }: any) {
    const [user, setUser] = useState<any>(null);

    const login = () => {
        setUser({
            name: "Admin User",
            avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}