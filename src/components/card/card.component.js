import React from "react";
import { Card, Cardtitle, CardDesc, AdditionString } from "./card.style";
import { View } from "react-native";

export const CardComp = ({}) => {
  return (
    <Card>
      <View>
        <Cardtitle>Rs. 1990</Cardtitle>
        <CardDesc>Amount spent today</CardDesc>
      </View>
      <AdditionString>+5%▲</AdditionString>
    </Card>
  );
};
