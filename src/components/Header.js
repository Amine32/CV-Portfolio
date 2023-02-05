import {Link, Outlet} from 'react-router-dom';
import React from "react";

export default function Header() {
    return (
        <>
            <header className="d-flex justify-content-between align-items-center p-3 bg-light">
                <h1 className="font-weight-bold">Software Engineer</h1>
                <nav className="d-flex">
                    <Link to="/" className="btn btn-primary mr-3">Home</Link>
                    <Link to="/projects" className="btn btn-primary mr-3">Projects</Link>
                    <Link to="/contact" className="btn btn-primary">Contact</Link>
                </nav>
            </header>
        </>
    );
}