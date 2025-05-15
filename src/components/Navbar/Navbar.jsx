import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { getAuthContext } from "../../context/authContext";
import { getCartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useMemo } from "react";

const Navbar = () => {
  const { cart } = getCartContext();
  const { user } = getAuthContext();
  const navigate = useNavigate();

  // Number of items in the cart
  const CartItemsCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  // Function to sign out users
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
      console.log("User signed out successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* ----------------------------------------- */}
      <div className={styles.firstRow}>
        <div className={styles.logo}>
          <img
            src="/icons/playstation-controller.svg"
            alt="PlayStation Controller Logo"
          />
        </div>
        {/* ----------------------------------------- */}
        <div className={styles.cartHamburgerMenu}>
          {user ? (
            <Button className={styles.signOutButton} onClick={handleSignOut}>
              Sign out
            </Button>
          ) : (
            <Link to="/sign-in" className={styles.signInLink}>
              Sign in
            </Link>
          )}
          {user && (
            <Link to="/profile" className={styles.profileButton}>
              {user.imageUrl ? (
                <img src={user.imageUrl} alt="User's profile picture" />
              ) : (
                <FontAwesomeIcon icon={faUser} className={styles.profileIcon} />
              )}
            </Link>
          )}

          <Link to="/cart" className={styles.cartButton}>
            <FontAwesomeIcon icon={faCartPlus} className={styles.cartIcon} />
            {CartItemsCount > 0 && (
              <span className={styles.cartBadge}>{CartItemsCount}</span>
            )}
          </Link>

          <Button className={styles.hamburgerButton}>
            <FontAwesomeIcon
              icon={faBars}
              className={styles.hamburgerMenuIcon}
            />
          </Button>
        </div>
      </div>
      {/* ----------------------------------------- */}
      <div className={styles.secondRow}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/games"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Games
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
