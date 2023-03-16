import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
          Tasty is a one-of-a-kind restaurant located in the heart of Baghdad. Our restaurant is inspired by traditional Iraqi cuisine and culture, and we take pride in offering our customers an authentic and unforgettable dining experience.
At Gericht, we believe that food is more than just sustenance; it is a way to connect with others and to share stories and traditions. Our menu is carefully crafted to showcase the diverse flavors and ingredients of Iraqi cuisine, from savory meat dishes to fragrant rice and vegetable dishes, all served with freshly baked bread.
We take great care in sourcing our ingredients, working with local farmers and suppliers to ensure that we are using only the freshest and highest quality produce. Our chefs are passionate about their craft, and they take great pride in preparing each dish to perfection.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
          Tasty has a rich history that dates back several decades. Our restaurant was founded by a group of passionate food enthusiasts who wanted to share their love of traditional Iraqi cuisine with the world.
Originally opened as a small family-run restaurant, Gericht quickly gained a reputation for its delicious food and warm hospitality. Over the years, we have grown and expanded, but our commitment to quality and authenticity has remained the same.
Throughout the years, Gericht has been a gathering place for locals and visitors alike. We have hosted countless celebrations, from weddings and birthdays to business meetings and political gatherings. Our restaurant has become a beloved institution in Baghdad, a place where people come to share food and stories and to connect with one another.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
