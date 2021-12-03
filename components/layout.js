import NavBar from "./navbar";

const Layout = ({ children }) => (
    <div>
        <NavBar />
        <main className="container py-4">
            {children}
        </main>

        <footer className="bg-dark text-light text-center">
            <div className="container p-2">
                <p>2016 - {new Date().getFullYear()}</p>
                <p>All rights Reserved.</p>
            </div>
        </footer>
    </div>
)

export default Layout;