import styled from "styled-components";
import React from "react";
import map from "./images/Map.png";
export const Contact = () => {
  return (
    <Container>
      <Map src={map} />

      <Form>
        <Text>
          We’d Love To Hear
          <br />
          From You
        </Text>
        <StyledInput placeholder="Email" />
        <StyledInput placeholder="Enter your email" />
        <StyledInput1 placeholder="Write your message" />
        <Button>Email Me</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  background-color: #90c0e8;
  height: 670px;
  width: 1440px;
  display: flex;
  padding: 0 213px;
`;
const Form = styled.div`
  height: 574px;
  width: 445px;
  margin-left: 155px;
  border-radius: nullpx;
  margin-top: 20px;
`;
const Text = styled.h1`
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 62px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  margin-top: -12px;
`;
const Map = styled.img`
  margin-top: 54px;
  padding-bottom: 130px;
`;
const StyledInput = styled.input`
  height: 60px;
  width: 445px;
  left: 0px;
  top: 0px;
  border: none;
  border-radius: 10px;

  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin: 10px 0px;
`;
const StyledInput1 = styled.input`
  top: 0px;
  width: 445px;
  border: none;
  border-radius: 10px;

  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-align: start;

  margin: 20px 0px;
  height: 120px;
`;

const Button = styled.button`
  height: 55px;
  width: 180px;
  border: none;
  border-radius: 10px;
  background: #f5bf75;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
  margin-left: 270px;
`;
