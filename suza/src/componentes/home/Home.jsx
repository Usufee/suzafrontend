import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/pagination";

import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

import "./home.css";
import AboutBackground from "../../assets/img/Mask.png";
import { BsCircleFill } from "react-icons/bs";
import CardsImage1 from "../../assets/img/Group 10.png";
import CardsImage2 from "../../assets/img/Group 13.png";
import CardsImage3 from "../../assets/img/Group14.png";
import CardsImage4 from "../../assets/img/Group 15.png";
import VarietiesBackground from "../../assets/img/Maskdown.png";
import UpperImage from "../../assets/img/Maskupper.png";
import DownImage from "../../assets/img/Maskdown.png";
import {
  FaArrowRight,
  FaArrowLeft,
  // FaRegStar,
  FaChevronRight,
  FaChevronLeft,
  FaStar, //filled star
  FaPinterest,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { FaMobileScreenButton, FaSquareInstagram } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";
import { useState, useEffect, useCallback } from "react";
import Vector from "../../assets/img/Vector.png";
import Blackman from "../../assets/img/blackman.png";
import Women from "../../assets/img/women.png";
import Glassman from "../../assets/img/glassman.png";
import Logo from "../../assets/img/SUZA PNG MO 1 (1).png";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    {
      id: 1,
      src: "../../assets/img/Frame56.png",
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
    {
      id: 2,
      src: "../../assets/img/Frame57.png",
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
    {
      id: 3,
      src: "../../assets/img/Frame58.png",
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
    {
      id: 4,
      src: "../../assets/img/Frame59.png",
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
    {
      id: 5,
      src: "../../assets/img/Frame60.png",
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
    {
      id: 6,
      src: "../../assets/img/Frame62.png",
      title: "preparing for packaging",
      description:
        "At our cafe, we take pride in providing our customers with the best coffee around. Our carefull take pride in providing our customers with the best coffee around. Our carefull",
    },
  ]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);
  return (
    <>
      <div className="main">
        <Navbar />
        <h1 className="firstH">Welcome To</h1>
        <h2 id="secondH">Suza Coffee Export</h2>
        <p>
          Today's good mood is sponsored by coffee search for your coffee now
        </p>

        <button>Explore</button>
      </div>
      <div className="about">
        <div>
          <img src={AboutBackground} alt="" />
          <h1 className="aboutH">About Us</h1>
        </div>

        <div className="mainstory">
          <div className="story1">
            <div className="story">
              <h1>Our Story</h1>
              <p>
                Suza is an online coffee store that offers the widest selection
                of specialty coffees and teas from around the world. From
                medium-dark roast single origin to flavored espresso beans, they
                offer a variety of ethically sourced products to tantalize any
                customer’s palate. For those looking for unique brewing
                equipment, Eliza also carries a full range of quality espresso
                makers, grinders, brewers, French presses and more. On top of
                all that, their baristas are highly trained professionals who
                know exactly how to make the...
              </p>
              <span>
                <Link to="Story" className="span">
                  More
                </Link>
              </span>
            </div>
          </div>
          <div className="story2">
            <div className="story">
              <h1>Our Story</h1>
              <p>
                Suza is an online coffee store that offers the widest selection
                of specialty coffees and teas from around the world. From
                medium-dark roast single origin to flavored espresso beans, they
                offer a variety of ethically sourced products to tantalize any
                customer’s palate. For those looking for unique brewing
                equipment, Eliza also carries a full range of quality espresso
                makers, grinders, brewers, French presses and more. On top of
                all that, their baristas are highly trained professionals who
                know exactly how to make the...
              </p>
              <span>
                <Link to="Story" className="span">
                  More
                </Link>
              </span>
            </div>
          </div>

          <div className="story3">
            <div className="story">
              <h1>Factory</h1>
              <p>
                Suza is an online coffee store that offers the widest selection
                of specialty coffees and teas from around the world. From
                medium-dark roast single origin to flavored espresso beans, they
                offer a variety of ethically sourced products to tantalize any
                customer’s palate. For those looking for unique brewing
                equipment, Eliza also carries a full range of quality espresso
                makers, grinders, brewers, French presses and more. On top of
                all that, their baristas are highly trained professionals who
                know exactly how to make the...
              </p>
              <span>
                <Link to="Story" className="span">
                  More
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="indextraker">
          <BsCircleFill className="unfilled" />
          <BsCircleFill className="filledCircle" />
          <BsCircleFill className="unfilled" />
        </div>
      </div>
      <div className="buttons">
        <button className="prev" onClick={handlePrev}>
          <FaArrowRight />
        </button>
        <button className="next" onClick={handleNext}>
          <FaArrowLeft />
        </button>
      </div>
      <div className="beforeVarieties">
        <img src={VarietiesBackground} alt="" />
      </div>
      <div className="varieties">
        <h1> Coffee Varieties</h1>
        <div className="allcards">
          <div className="cards">
            <div className="row">
              <img src={CardsImage1} alt="" />
              <p>
                At our cafe, we take pride in providing our customers with the
                best coffee around. Our carefull take pride in providing our
                customers with the best coffee around. Our..
              </p>
            </div>

            <p className="dark">
              <span>Arabica</span> Dark Roast
            </p>
            <span className="more">More</span>
          </div>

          <div className="cards">
            <div className="row">
              <img src={CardsImage2} alt="" />
              <p>
                At our cafe, we take pride in providing our customers with the
                best coffee around. Our carefull take pride in providing our
                customers with the best coffee around. Our..
              </p>
            </div>
            <p className="dark">
              <span>House Blend</span> Dark Roast
            </p>
            <span className="more">More</span>
          </div>
          <div className="cards">
            <div className="row">
              <img src={CardsImage3} alt="" />
              <p>
                At our cafe, we take pride in providing our customers with the
                best coffee around. Our carefull take pride in providing our
                customers with the best coffee around. Our..
              </p>
            </div>
            <p className="dark">
              <span>Robusta</span> Dark Roast
            </p>
            <span className="more">More</span>
          </div>
          <div className="cards">
            <div className="row">
              <img src={CardsImage4} alt="" />
              <p>
                At our cafe, we take pride in providing our customers with the
                best coffee around. Our carefull take pride in providing our
                customers with the best coffee around. Our..
              </p>
            </div>
            <p className="dark">
              <span>Indian</span> Dark Roast
            </p>
            <span className="more">More</span>
          </div>
        </div>
      </div>
      <div className="transvarieties">
        <img className="firstimg" src={AboutBackground} alt="" />
        <img className="secondimg" src={DownImage} alt="" />
      </div>
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="container">
          <div className="slide">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`item item${index + 1} ${
                  index === currentIndex ? "active" : ""
                }`}
                style={{
                  backgroundImage: `url(${
                    new URL(image.src, import.meta.url).href
                  })`,
                }}
              >
                <div className="content">
                  <h4 className="name">{image.title}</h4>
                  <p className="des">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="button">
            <button className="prev" onClick={handlePrev}>
              <FaArrowRight />
            </button>
            <button className="next" onClick={handleNext}>
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>
      <div className="transgallery">
        <img className="secondimg" src={UpperImage} alt="" />
      </div>
      <div className="customerReview">
        <h1>Customer Review</h1>

        <div className="allcustom">
          <FaChevronLeft className="left" />
          <div className="customer4">
            <div className="vectors">
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
            </div>
            <img className="profileImage" src={Blackman} alt="" />
            <h2>Tyler Student</h2>
            <div className="icons">
              <FaStar className="icon1" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
            </div>
            <p>
              I love spending my downtime in a cozy coffee shop, surrounded by
              the sweet aroma of freshly brewed drinks and pastries.
            </p>
          </div>
          <div className="customer1">
            <div className="vectors">
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
            </div>
            <img className="profileImage" src={Glassman} alt="" />
            <h2>Tyler Student</h2>
            <div className="icons">
              <FaStar className="icon1" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
            </div>
            <p>
              I love spending my downtime in a cozy coffee shop, surrounded by
              the sweet aroma of freshly brewed drinks and pastries.
            </p>
          </div>
          <div className="customer2 active">
            <div className="vectors">
              <img className="vector" src={Vector} alt="" />
              <img className="vector" src={Vector} alt="" />
            </div>
            <img className="profileImage" src={Blackman} alt="" />
            <h2>Tyler Student</h2>
            <div className="icons">
              <FaStar className="icon1" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
            </div>
            <p>
              I love spending my downtime in a cozy coffee shop, surrounded by
              the sweet aroma of freshly brewed drinks and pastries.
            </p>
          </div>

          <div className="customer3">
            <div className="vectors">
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
            </div>
            <img className="profileImage" src={Women} alt="" />
            <h2>Tyler Student</h2>
            <div className="icons">
              <FaStar className="icon1" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
            </div>
            <p>
              I love spending my downtime in a cozy coffee shop, surrounded by
              the sweet aroma of freshly brewed drinks and pastries.
            </p>
          </div>
          <div className="customer5">
            <div className="vectors">
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
            </div>
            <img className="profileImage" src={Blackman} alt="" />
            <h2>Tyler Student</h2>
            <div className="icons">
              <FaStar className="icon1" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
            </div>
            <p>
              I love spending my downtime in a cozy coffee shop, surrounded by
              the sweet aroma of freshly brewed drinks and pastries.
            </p>
          </div>
          <FaChevronRight className="right" />
        </div>
      </div>
      <div>
        <img src={DownImage} alt="" className="transcostum" />
      </div>

      <footer>
        <div className="allfooter">
          <div className="footer4">
            <div className="adress">
              <FaMapMarkerAlt />
              <p>Addis Ababa ,Ethiopia</p>
            </div>
            <div className="adress">
              <BiSolidEnvelope />
              <p>Suzacoffee@Coffee.Com</p>
            </div>
            <div className="adress">
              <FaMobileScreenButton />
              <p>+1-222-34-SUZA</p>
            </div>
          </div>
          <div className="footer">
            <div className="footer1">
              <img src={Logo} alt="" />
              <p>Suza Coffee Export</p>
              <div>
                <FaPinterest className="social" />
                <FaLinkedin className="social" />
                <FaSquareInstagram className="social" />
              </div>
            </div>
            <div className="footer2">
              <ul>
                <li>
                  <Link className="link">Home</Link>
                  <Link className="link">About</Link>
                  <Link className="link">Our Story</Link>
                  <Link className="link">Menu</Link>
                  <Link className="link">Locations</Link>
                  <Link className="link">Support</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer3">
            <p>Created By Ziyin</p>
            <p>&copy; Copyright 2024 Suza Coffee All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
