import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Introduction from "./components/Introduction";
import Header from "./components/Header";


export default function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Introduction/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
}