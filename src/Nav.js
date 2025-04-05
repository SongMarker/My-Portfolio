import './Nav.css'

function Nav() {
    return (
        <header className='Header'>
            <div className='Header_nav'>
                <h1 className='Header_logo'>Song's portfolio</h1>
                <nav className='Header_menu'>
                   <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#Introduce'>Introduce</a></li>
                        <li><a href='#Skills'>Skills</a></li>
                        <li><a href='#Project'>Project</a></li>
                   </ul>
                </nav>
            </div>

        </header>
    );
  }
  
  export default Nav;