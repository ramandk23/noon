import "./Header.css";
import avatarImg from "../../assets/avatar.png"
import shoppingBag from "../../assets/shopping-bag.png"

const Header = () => {
  return (

    <div className="header">
      <div className="header-content">
        <nav className="navigation">
         <button className="menu-icon">☰</button>
        </nav>
        <div className="logo">NOON</div>
        <nav className="nav">
          <ul>
            <li><a href="#profile"><img src={avatarImg} /></a></li>
            <li><a href="#cart"><img src={shoppingBag} /></a></li>
           
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
