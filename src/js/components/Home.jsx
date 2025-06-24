import React from "react";

//include images into your bundle
import NavBar from "./NavBar";
import Jumbotrom from "../Jumbotrom";
import Cards from "./Cards";
import Footer from "./Footer";


//create your first component
const cardData = [
  { title: "Card Title", imageUrl: "https://via.placeholder.com/500x325" },
  { title: "Card Title", imageUrl: "https://via.placeholder.com/500x325" },
  { title: "Card Title", imageUrl: "https://via.placeholder.com/500x325" },
  { title: "Card Title", imageUrl: "https://via.placeholder.com/500x325" },
 
];

const Home = () => {
  return (
    <>
      <NavBar />
      <Jumbotrom />

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