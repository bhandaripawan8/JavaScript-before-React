//sfc for shortcut key creates a stateless functional components
// for inline css, it requires double curly brackets, first one says we are looking for dynamic css and the second one represents the js objects, inside the object we will pass key value pair css properties and the values will always be string


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Pawan Blog</h1>
            <a href="/Create" style={{
                color: "white",
                backgroundColor: "#005164",
                borderRadius: "8px"
            }}>New Blog</a>
            <a href="/contact">Contact</a>
            <a href="/about">About US</a>
        </nav>
     );
}
 
export default Navbar;