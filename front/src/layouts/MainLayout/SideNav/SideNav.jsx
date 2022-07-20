import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function SideNav({ routes = [] }) {
  const [active, setActive] = useState(null);
  return (
    <ul className="side-nav">
      {routes.map(({ icon: Icon, href, text }, i) => {
        return (
          <li
            key={i}
            className={`side-nav__item ${
              active === i ? "side-nav__item--active" : ""
            }`}
          >
            <NavLink
              to={href}
              className={({ isActive }) =>
                `side-nav__link ${isActive && setActive(i)}`
              }
            >
              {<Icon className="side-nav__icon" />}
              <span>{text}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default SideNav;
