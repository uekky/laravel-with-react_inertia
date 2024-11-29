import { Link, usePage } from "@inertiajs/react";
import "./NavBar.css";

const NavBar = () => {
    const { url, component } = usePage();
    return (
        <>
            <div>URL : {url}</div>
            <div>Component : {component}</div>
            <nav>
                <ul>
                    <li>
                        <Link
                            href={route("welcome")}
                            className={url === "/user" ? "active" : ""}
                        >
                            Welcome
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("about")}
                            className={url === "/about" ? "active" : ""}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("user")}
                            className={url.startsWith("/user") ? "active" : ""}
                        >
                            User
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
