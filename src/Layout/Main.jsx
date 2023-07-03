import { createContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


export const ModeContext = createContext()

const Main = () => {
    const [darkMode, setDarkMode] = useState(false)
    const value = {
        darkMode, setDarkMode
    }

    return (
        <ModeContext.Provider value={value}>
            <div className={darkMode && "dark"}>
                <Navbar />
            </div>
            <main className="
             dark:bg-gray-900 text-gray-900 dark:text-white">
                <Outlet />
            </main>
            <Footer />
        </ModeContext.Provider>

    );
};

export default Main;