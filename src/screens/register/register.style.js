import styled from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";

export const Home = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Container = styled.View`
  padding-top: 50px;
`;

export const Inline = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 55%;
  justify-content: space-around;
`;

export const Cardtitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  margin-top: 4px;
  color: #224870;
`;

export const Form = styled(TextInput)`
  background-color: #e0dcfa;
`;