/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { ModeContext } from "../../Layout/Main";

const Navbar = () => {
    // ------------------------------
    const { darkMode, setDarkMode } = useContext(ModeContext);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };
    // ------------------------------
    const itemList = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/hero">Header</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>

    return (
        <>
            <div className="navbar  
             text-gray-800 dark:text-white dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-600 via-30% to-violet-800 to-90% bg-zinc-50 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {itemList}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">Arjuman</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {itemList}
                    </ul>
                </div>

                <div className="navbar-end" onClick={handleDarkModeToggle}>
                    {darkMode ? (
                        <MdWbSunny className="text-2xl cursor-pointer" />
                    ) : (
                        <MdNightsStay className="text-2xl cursor-pointer" />
                    )}
                </div>

            </div>
        </>
    );
};

export default Navbar;