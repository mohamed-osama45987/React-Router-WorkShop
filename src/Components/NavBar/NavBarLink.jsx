import { Link } from "react-router-dom"
import { PropTypes } from "prop-types";

const NavBarLink = ({ path, text }) => {
    return (
        <li>
            <Link to={path} style={{ textDecoration: "none" }}>{text}</Link>
        </li>
    )
}

NavBarLink.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default NavBarLink