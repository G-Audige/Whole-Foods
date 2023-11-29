import React from 'react';

function Header(props) {
  return (
    <div>
      <div className="header-top">
        <a href={props.link.mainPage}>
          <img src={'https://i.imgur.com/nddpnhp.png'} alt="" />
        </a>
        <div className="search">
          <div className="searchbox">
            <input></input>
            <button>Q</button>
          </div>
        </div>
        <a href={props.link.stores}>Find a Store</a>
        <a href={props.link.logIn}>Log In</a>
        <a href={props.link.cart}>Cart</a>
      </div>
      <div className='header-bottom'>
        <a href={props.link.products}>Browse In-Store</a>
        <a href={props.link.sales}>Weekly Sales</a>
        <a href={props.link.groceries}>Grocery Pickup & Delivery</a>
        <a href={props.link.catering}>Catering</a>
        <a href={props.link.shipping}>Shipped to You</a>
        <a href={props.link.dining}>Lunch & Dinner to Go</a>
        <a href={props.link.recipes}>Recipes</a>
    </div>
    </div>
  );
}

export default Header;
