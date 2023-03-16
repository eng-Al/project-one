import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef_image" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">
            At Tasty , we believe in creating an exceptional dining experience every time you visit. We believe that:
            </p>
          </div>
          <p className="p__opensans">
            {" "}
            Fresh, locally-sourced ingredients create the best meals.
Good food should be enjoyed with good company.
Exceptional service is key to making your visit memorable.
A welcoming atmosphere is just as important as great food.
Our customers are part of our family, and every experience should reflect that.
Our goal is to provide delicious food in a warm and inviting environment, all while supporting local vendors and farmers to help boost our community. We take pride in serving you and hope to make each visit better than the last.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
