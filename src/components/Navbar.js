import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../middleware/auth";
function Navbar() {
    const { isUserLogin, userData } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {userData.username}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/show">
                                    Show Transction
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/add">
                                    Add Transction
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/self">
                                    Self Transfer
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/addaccount">
                                    Add New Bank
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {isUserLogin ? (
                                <Link className="btn btn-primary mx-2" to="/logout" role="button">
                                    Logout
                                </Link>
                            ) : (
                                <>
                                    <Link className="btn btn-primary  mx-2" to="/login" role="button">
                                        Login
                                    </Link>
                                    <Link className="btn btn-primary mx-2" to="/register" role="button">
                                        Register
                                    </Link>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
