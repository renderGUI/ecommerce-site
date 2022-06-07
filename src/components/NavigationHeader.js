import classes from "./NavigationHeader.module.scss";
import { NavLink } from "react-router-dom";

const NavigationHeader = () => {
  return (
    <header className={classes.container}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { fontWeight: isActive ? "600" : "400" };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return { fontWeight: isActive ? "600" : "400" };
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={({ isActive }) => {
                return { fontWeight: isActive ? "600" : "400" };
              }}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;
