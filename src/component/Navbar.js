import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-logo" href="/">
                    <img className='logo' src='https://tse4.mm.bing.net/th?id=OIP.uPqSV8ziLZy6nmQqc_J7YQHaDC&pid=Api&P=0&w=405&h=166' alt='bg' />
                </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <h6>Home</h6>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">
                            <h6>Create</h6>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;
