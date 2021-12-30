import styled from "styled-components";
import React from "react";
import img1 from "./images/Image1.png";
import sign from "./images/signature.png";
import App from "./images/Applist.png";
export const Header = () => {
  return (
    <Container>
      <Picture src={img1} />
      <About>
        <Name>Ariene Rey</Name>

        <Designation>an UI/UX Designer.</Designation>
        <Intro>
          UX Designer based in Jakarta, Indonesia. I am designing with a minimal
          and beautiful design in mind.
        </Intro>
        <EmailMe>Email me</EmailMe>
        <Email>ariene.rey@gmail.com</Email>
        <Sign src={sign} />
        <Skill>
          Tools & Skills
          <Icons src={App} />
        </Skill>
      </About>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 166px;
  margin-top: 105px;
  display: flex;
`;
const Picture = styled.img``;

const About = styled.div`
  border: solid red 1px;
  height: 60px;
  width: 636px;
  margin-left: 94px;
  flex-direction: column;
  display: inline-block;
`;
const Name = styled.h1`
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 0px;
  letter-spacing: 0px;
  text-align: left;
`;
const Text = styled.h5`
  font-family: Poppins;
  font-size: 18px;
  border: solid 1px red;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`;
const Designation = styled(Text)``;
const Intro = styled(Text)`
  margin: 25px 0px;
`;
const EmailMe = styled(Text)`
  margin-top: 25px;
`;
const Email = styled(Text)`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0px;
  text-align: left;
  margin-top: -30px;
`;
const Sign = styled.img`
  display: flex;
`;
const Skill = styled.div`
  margin-top: 5px;
  text-align: start;
`;
const Icons = styled.img`
  display: flex;
`;
