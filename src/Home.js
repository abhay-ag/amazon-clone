import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Hero Image"
        />

        <div className="home__row">
            <Product 
                id="111"
                title='The lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
                price={11.96}
                image = "https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY218_.jpg"
                rating={5} />
            <Product 
                id="112"
                title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                price={239.0}
                image = "https://m.media-amazon.com/images/I/61jhA1++G6L._AC_UY218_.jpg"
                rating={4} />
        </div>

        <div className="home__row">
            <Product 
                    id="113"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    image = "https://m.media-amazon.com/images/I/81ncZ64JDCL._AC_UY218_.jpg"
                    rating={3} />
            <Product 
                    id="114"
                    title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
                    price={98.99}
                    image = "https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY218_.jpg"
                    rating={5} />

            <Product 
                    id="115"
                    title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)'
                    price={589.99}
                    image = "https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY218_.jpg"
                    rating={4} />
        </div>

        <div className="home__row">
            <Product 
                id= "116"
                title= "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                price = {232.99}
                rating = {4}
                image  = "https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg"
            />
        </div>

        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
