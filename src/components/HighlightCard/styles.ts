import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/theme";

interface IconProps {
  color: keyof typeof theme.colors;
}

export interface TypeProps {
  type: "D" | "C" | "T";
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    theme.colors[type === "T" ? "secondary" : "shape"]};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px 23px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    theme.colors[type === "T" ? "shape" : "text_dark"]};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(40)}px;
  color: ${({ theme, color }) => theme.colors[color]};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    theme.colors[type === "T" ? "shape" : "text_dark"]};
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) => theme.colors[type === "T" ? "shape" : "text"]};
`;