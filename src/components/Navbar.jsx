import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">T3</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/about">Details</Link>
        <Link to="/authentication">Sign In</Link>
      </div>
    </nav>
  )
}
