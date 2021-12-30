import styled from "styled-components";
import React from "react";
import img1 from "./images/Image1.png";
import sign from "./images/signature.png";
import App from "./images/Applist.png";
import pic1 from "./images/Picture1.png";
import pic2 from "./images/Picture2.png";
import pic3 from "./images/Picture3.png";
export const Team = () => {
  return (
    <Container>
      <Text>Our Team</Text>
      <Members>
        <Mate>
          <Picture src={pic1} />
          <Name>Eleanor Pena</Name>
          <Designation>UX Designer</Designation>
        </Mate>
        <Mate>
          <Picture src={pic2} />
          <Name>Cody Fisher</Name>
          <Designation>Back End Developer</Designation>
        </Mate>
        <Mate>
          <Picture src={pic3} />
          <Name>Jane Cooper</Name>
          <Designation>Front End Developer</Designation>
        </Mate>
      </Members>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 165px;

  margin-top: 100px;
  height: 600px;
  width: 1110px;
`;
const Picture = styled.img``;

const Text = styled.h1`
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 46px;
  letter-spacing: 0em;
  text-align: center;
`;
const Members = styled.div`
  height: 387.90625px;
  width: 1015px;
  padding-left: 51px;
  padding-right: 51px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: solid red 1px;
`;
const Mate = styled.div``;
const Name = styled(Text)`
  font-weight: 500;
`;
const Designation = styled(Text)`
  margin: -35px;
  font-weight: 500;
  color: #e1e1e1;
  font-size: 24px;
`;
