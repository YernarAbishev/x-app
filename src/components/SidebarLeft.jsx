import logo from  "../assets/images/logo.svg";
import {Link} from "react-router-dom";
import {
    ADD_POST_PAGE,
    COMMUNITIES_PAGE,
    HOME_PAGE, PREMIUM_PAGE,
    PROFILE_PAGE,
} from "../utils/consts";
import {useEffect, useState} from "react";

function SidebarLeft() {
    const [darkTheme, setDarkTheme] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }, [darkTheme]);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };
    return (
        <div className="sidebar-left">
            <div className="fixed-wrap">
                <Link to={HOME_PAGE} className="logo">
                    <img src={logo} alt="Logo"/>
                </Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to={HOME_PAGE} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={COMMUNITIES_PAGE} className="nav-link">Communities</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={PREMIUM_PAGE} className="nav-link">Premium</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={PROFILE_PAGE} className="nav-link">Profile</Link>
                    </li>
                </ul>
                <Link to={ADD_POST_PAGE} className="primary-button">Post</Link>
                <div className="toggle-theme" onClick={toggleTheme}>
                    <span>Theme</span>
                </div>
            </div>
        </div>
    );
}

export default SidebarLeft;
