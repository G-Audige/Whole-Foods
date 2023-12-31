import React from 'react';

function Main(props) {
  return (
    <div className="main">
      <div className="sale">
        <img src="https://i.imgur.com/uHGISch.jpg" alt="" />
        <div className="sales-hype">
          <div>
            <h1>Act Fast: Hot 18" Cheese Pizza, $10 Each</h1>
            <p>
              Prime members: Pounce on a sizzling whole pizza the whole family
              will love for just 10$ through 11/28. Plus, save on seasonal
              ingredients and favorites to pair with your pie.
            </p>
            <a href={props.link.sales}>See all sales</a>
            <p>Valid 11/24-11/28/23. U.S. only. Restrictions apply.</p>
          </div>
        </div>
      </div>
      <div className="boxes">
        <div>
          <a href={props.link.groceries}>Grocery Pickup & Delivery</a>
          <img src="https://i.imgur.com/WToUcWu.png" alt="" />
        </div>
        <div>
          <a href={props.link.catering}>Catering</a>
          <img src="https://i.imgur.com/NECxkEk.png" alt="" />
        </div>
        <div>
          <a href={props.link.shipping}>Shipped to You</a>
          <img src="https://i.imgur.com/iWdSftr.png" alt="" />
        </div>
        <div>
          <a href={props.link.sales}>Weekly Sales</a>
          <img src="https://i.imgur.com/TZz9c56.png" alt="" />
        </div>
      </div>
      <div className="sale sale-shadow sale-sizing">
        <div>
          <img src="https://i.imgur.com/C2fPapC.jpg" alt="" />
          <div className="dinner-hype">
            <h1>Dinner? Done! Shop our mealtime shortcuts</h1>
            <p>
              Chill out with meals that are ready to go and ready to heat, from
              chef-inspired solves to frozen faves. Even easier? Get it all with
              pickup or delivery.
            </p>
            <a href={props.link.shopNow}>Shop now</a>
            <p>
              Free pickup for orders $35 or more. Delivery exclusively for Prime
              members in select ZIP codes.
            </p>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product">
          <div>
            <img src="https://i.imgur.com/IyEegMp.jpg" alt="" />
          </div>
          <div>
            <a href={props.link.sales}>
              2 for $4 Large Hass Avocado with Prime.
            </a>
          </div>
        </div>
        <div className="product">
          <div>
            <img src="https://i.imgur.com/rA0AADW.jpg" alt="" />
          </div>
          <div>
            <a href={props.link.sales}>
              Responsibly Farmed Fresh Atlantic Salmon Fillets 20% off with
              Prime.
            </a>
          </div>
        </div>
        <div className="product">
          <div>
            <img src="https://i.imgur.com/7qpsoFH.jpg" alt="" />
          </div>
          <div>
            <a href={props.link.sales}>
              Select Reusable Water Bottles and Accessories 33% off with Prime.
            </a>
          </div>
        </div>
        <div className="product">
          <div>
            <img src="https://i.imgur.com/3fuQrx6.jpg" alt="" />
          </div>
          <div>
            <a href={props.link.sales}>
              Explore brands that support our communties.
            </a>
          </div>
        </div>
      </div>
      <div className="shipping">
        <div className="background">
          <img
            src="https://i.imgur.com/C76fpIM.jpg"
            className="amazon-box"
            alt=""
          />
          <div className="shipping-hype">
            <div>
              <h1>Market, now shipped FREE with Prime.</h1>
              <p>
                No store near you? No problem. Shop 365 brand pantry staples on
                Amazon and get your picks shipped FREE with Prime.
              </p>
              <div className="a-size">
                <a href={props.link.shipping}>Shop now</a>
              </div>
              <img src="https://i.imgur.com/AInSWuV.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
