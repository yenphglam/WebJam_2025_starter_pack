import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

/*
This is the starting point of our application. Here, we can begin coding 
and transforming this page into whatever best suits our needs. 
For example, we can start by creating a login page, home page, or an about section; 
there are many ways to get your application up and running. 
With App.jsx, we can also define global variables and routes to store information as well as page navigation.
*/
function App() {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            
            {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
            {currentPage === "quiz" && <Quiz />}
            {currentPage === "faq" && <FAQ />}
            {currentPage === "contact" && <Contact />}
        </>
    );
}

export default App;
