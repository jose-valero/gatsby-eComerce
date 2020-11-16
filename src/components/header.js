import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from "../styles/components"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="logo" />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Productos</Link>
        </MenuItem>
        <MenuItem margin>
          <Link to="/cart">
            <span>
              <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="carLogo" />
            </span>
          </Link>
        </MenuItem>
        <MenuItem>
          <a href="https://platzi.com/home" target="_blank" rel="noreferrer">
            Platzi
          </a>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header