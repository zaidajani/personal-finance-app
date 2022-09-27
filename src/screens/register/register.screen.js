import React, { useRef } from "react";
import { Text, SafeAreaView, View, InputText } from "react-native";
import { Home, Cardtitle, From } from "./register.style";
import LottieView from 'lottie-react-native';

export const RegisterScreen = () => {
  const animation = useRef(null);

  return (
    <SafeAreaView>
      <Home>
        <View style={{
          marginTop: 25
        }} />
        <Cardtitle>Register to Expenisto</Cardtitle>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 15
          }}
          source={require('./../../animations/money.json')}
        />
        <From />
      </Home>
    </SafeAreaView>
  )
}