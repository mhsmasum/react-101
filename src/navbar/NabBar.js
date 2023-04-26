import './navbar.css'

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Create Blog</a>
                </div>
        </nav>

     );
}
 
export default NavBar;