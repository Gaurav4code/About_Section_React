import styled from "styled-components";
import React from "react";
import img1 from "./images/Image1.png";
import sign from "./images/signature.png";
import App from "./images/Applist.png";
import pic1 from "./images/Picture1.png";
import pic2 from "./images/Picture2.png";
import pic3 from "./images/Picture3.png";
export const Member = (props) => {
  return (
    <Mate>
      <Picture src={props.img} />
      <Name>{props.name}</Name>
      <Designation>{props.Designation}</Designation>
    </Mate>
  );
};

const Container = styled.div`
  margin-left: 165px;

  margin-top: 100px;
  height: 600px;
  width: 1110px;
`;
const Text = styled.h1`
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 46px;
  letter-spacing: 0em;
  text-align: center;
`;
const Picture = styled.img``;
const Name = styled(Text)`
  font-weight: 500;
`;

const Mate = styled.div`
  display: inline-block;
`;

const Designation = styled(Text)`
  margin: -25px;
  font-weight: 500;
  color: #e1e1e1;
  font-size: 24px;
`;
