{
  /* <img src="../images/image-product-mobile.jpg" alt="Parfume Images" /> */
}
import { useState } from "react";
import "./index.css";
import { useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imgUrl =
    windowWidth < 400
      ? "image-product-mobile.jpg"
      : "image-product-desktop.jpg";

  return <Card img={imgUrl} />;
};

function Card({ img }) {
  return (
    <div className="card-container">
      <CardImage img={img} />
      <CardContent />
    </div>
  );
}

function CardImage({ img }) {
  return (
    <div className="image-container">
      <img src={`./${img}`} alt="Parfume Images" />
    </div>
  );
}
function CardContent() {
  return (
    <div className="content-container">
      <h4>Perfume</h4>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <p className="price">
        <span className="new-price">$149.99</span>
        <span className="old-price">$169.99</span>
      </p>
      <div className="button-container">
        <button>
          <img src="./icon-cart.svg" alt="icon cart" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
