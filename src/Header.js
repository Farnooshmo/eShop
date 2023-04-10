import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <StorefrontIcon className="header_logoImage" fontSize="large" />
        <h2 className="header_logoTitle">eShop</h2>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_item_line_one">Welcome</span>
          <span className="nav_item_line_two">Sign in</span>
        </div>
        <div className="nav_item">
          <span className="nav_item_line_one">Your</span>
          <span className="nav_item_line_two">Shop</span>
        </div>
        <div className="itemBasket">
          <ShoppingBasketIcon />
          <span className="nav_item_line_two nav_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
