import React from "react";
import styled from "styled-components/native";

export const Card = styled.View`
  height: 150px;
  width: 100%;
  padding: 20px;
  background-color: #F1F1F1;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
`;

export const Cardtitle = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: #224870;
  margin-top: 10px;
`;

export const CardDesc = styled.Text`
  font-size: 17px;
  width: 150px;
  font-weight: 400;
  color: #224870;
  margin-top: 15px;
`;

export const AdditionString = styled.Text`
  font-size: 20px;
  width: 150px;
  font-weight: 500;
  color: #BA2F2F;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 30%;
`;