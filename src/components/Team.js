import styled from "styled-components";
import React from "react";
import img1 from "./images/Image1.png";
import sign from "./images/signature.png";
import App from "./images/Applist.png";
import pic1 from "./images/Picture1.png";
import pic2 from "./images/Picture2.png";
import pic3 from "./images/Picture3.png";
import { Member } from "./Member";
export const Team = () => {
  return (
    <Container>
      <Text>Our Team</Text>
      <Members>
        <Member img={pic1} name="Eleanor Pena" Designation="UX Designer" />
        <Member
          img={pic3}
          name="Jane Cooper"
          Designation="Front End Developer"
        />
        <Member
          img={pic2}
          name="Cody Fisher"
          Designation="Back End Developer
"
        />
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

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0px;
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
