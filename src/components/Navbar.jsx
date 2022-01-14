import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExporeIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <ExporeIcon
              fill={location.pathname === "/" ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
              onClick={() => navigate("/")}
            />
            <p
              className={
                location.pathname === "/"
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>

          <li className="navbarListItem">
            <OfferIcon
              fill={location.pathname === "/offers" ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
              onClick={() => navigate("/offers")}
            />
            <p
              className={
                location.pathname === "/offers"
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offer
            </p>
          </li>

          <li className="navbarListItem">
            <PersonOutlineIcon
              fill={location.pathname === "/profile" ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
              onClick={() => navigate("/profile")}
            />
            <p
              className={
                location.pathname === "/profile"
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
