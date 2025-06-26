import React from "react";

//include images into your bundle
import NavBar from "./NavBar";
import Jumbotron from "../Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";


//create your first component
const cardData = [
  { title: "Card Title", imageUrl: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1280&q=60&fm=webp" },
  { title: "Card Title", imageUrl: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1280&q=60&fm=webp" },
  { title: "Card Title", imageUrl: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1280&q=60&fm=webp" },
  { title: "Card Title", imageUrl: "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1280&q=60&fm=webp" },
  
];

const Home = () => {
  return (
    <>
      <NavBar />
      <Jumbotron />

      <div className="container my-5">
        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="col-12 col-sm-10 col-md-6 col-lg-3 mb-4 d-flex justify-content-center"
            >
              <Cards title={card.title} imageUrl={card.imageUrl} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;