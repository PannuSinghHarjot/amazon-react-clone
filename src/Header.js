import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <nav className="header">
        <Link to="/" >
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      </Link>
    <div className="header__search" >
      <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
    </div>

    <div className="header__nav">
        {/* {First Link} */}
        <Link to="/login" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Hello Manu</span>
            <span className="header__optionLineTwo">Sign In</span>
        </div>
        </Link>

         {/* {Second Link} */}
         <Link to="/login" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>
          {/* {Third Link} */}
          <Link to="/login" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
        </div>
        </Link>
           {/* {4th Link Link} */}
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

            </div>
        </Link>
    </div>
    </nav>


  );
}

export default Header;