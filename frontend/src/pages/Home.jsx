import "./Home.module.css";
import Navbar from "../components/Navbar.jsx";
import MainContent from "../components/MainContent.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <>
            <Navbar />
            <MainContent />
            <Footer />
        </>
    );
}