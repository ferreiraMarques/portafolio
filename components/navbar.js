const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/eferreiramarques/" target="_blank" className="nav-link">Linkedin</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/ferreiraMarques" target="_blank" className="nav-link">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default NavBar;