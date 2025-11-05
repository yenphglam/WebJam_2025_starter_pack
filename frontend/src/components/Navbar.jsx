export default function Navbar() {
    return (
        <nav id="navbar">
            <a class="brand" href="#">HygenicMe</a>
            <div id="navbar-items">
                <a class="navbar-item selected" href="#">Home</a>
                <a class="navbar-item" href="#">Quiz</a>
                <a class="navbar-item" href="#">FAQ</a>
                <a class="navbar-item" href="#">Contact</a>
            </div>
        </nav>
    )
}