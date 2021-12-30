import styled from "styled-components";
import React from "react";
import img2 from "./images/Image2.png";
import img3 from "./images/Image3.png";
import sign from "./images/signature.png";
import App from "./images/Applist.png";
export const Article = () => {
  return (
    <Container>
      <Text>
        My most recent work stint was with <span> Sprinklr </span> where I
        designed for some of its core offerings like Social Media Engagement,
        Social Advertising, Care support and Analytics for big brands with a
        global reach that helped integrate all their social marketing needs
        under one roof. Having led the design team for four years in this young,
        rapidly growing enterprise startup environment - taught me how to
        balance business goals and engineering constraints as I unrelentingly
        advocated for the user.
      </Text>
      <Picture src={img2} />
      <Text>
        I graduated from Symbiosis Institute of Design, India with a degree in
        User Experience Design. I loved the human-centered design methods and
        processes I learned in school and applied them to my thesis project with
        Microsoft R&D, Hyderabad
        <br />
        <br />I grew up in 7 different states in India and my ability to quickly
        adjust to new challenges in life comes from that. Owing to my diverse
        upbringing, I embrace all cultures and try to bring it to the designs I
        create. I am a movie buff and there’s nothing like relaxing to a good
        masala Bollywood movie. Food is my second love and I let my nose guide
        me to the pleasures of the stomach once every weekend.
      </Text>
      <Picture src={img3} />
    </Container>
  );
};

const Container = styled.div`
  margin-left: 165px;
  margin-top: 100px;

  height: 1863px;
  width: 1110px;

  border-bottom: 2px #e1e1e1 solid;
  border-top: 2px #e1e1e1 solid;
`;
const Picture = styled.img``;
const Text = styled.h1`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0px;
  text-align: left;

  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: 0px;
  text-align: left;
  margin: 45px 0px;

  span {
    font-weight: 900;
  }
`;
