import React from "react";
import { Home, Container, Cardtitle, Inline } from "./home.styles";
import { CardComp } from "./../../components/card/card.component";
import { Menu } from "./../../components/hamburger-menu/hamburger-menu.component";
import { SafeAreaView, Text, View } from "react-native";

export const HomeScreen = ({}) => {
  return (
    <SafeAreaView>
      <Home>
        <Inline>
          <View>
            <Menu />
          </View>
          <Cardtitle>Analytics</Cardtitle>
        </Inline>
        <Container>
          <CardComp />
        </Container>
      </Home>
    </SafeAreaView>
  );
};
