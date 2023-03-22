import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/computers">PC Builds</Link>
                <Link className="nav-link" to="/mycomputers">My Builds</Link>
                <Link className="nav-link" to="/favorites">My Favorites</Link>
                <Link className="nav-link" to="/staffbuilds">Staff Curated Builds</Link>
                <Link className="nav-link" to="/newcomputer">Create PC</Link>
                <Link className="nav-link" to="/classes">Contact Us</Link>
            </li>
            {
                (localStorage.getItem("velocity_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("velocity_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}