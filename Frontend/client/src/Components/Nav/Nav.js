import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
import Logout from "../Log/Logout";

const Nav = () => {
  const userData = useSelector((state) => state.userReducer);

  const menuToggle = () => {
    const toggleMenu = document.querySelector(".profil_menu");
    toggleMenu.classList.toggle("active");
  };

  return (
    <div className="Navheader">
      <div className="logo">
        <Logo />
      </div>
      <div className="action">
        <div className="profil" onClick={menuToggle}>
          <img src={userData.media} alt="profil" />
        </div>

        <div className="profil_menu">
          <h3>
            {userData.name} <br />
            <span> {userData.service}</span>
          </h3>

          <ul>
            <li>
              <Link to={`/profil/${userData.id}`}>Mon profil</Link>
            </li>
            <Logout />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
