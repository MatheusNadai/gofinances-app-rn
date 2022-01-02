import React from "react";
import theme from "../../global/theme";
import {
  Container,
  Header,
  Title,
  Footer,
  Amount,
  LastTransaction,
  Icon,
} from "./styles";
import { HighlightCardProps } from "./types";

const icon: {
  [key: string]: { name: string; color: keyof typeof theme.colors };
} = {
  C: { name: "arrow-up-circle", color: "success" },
  D: { name: "arrow-down-circle", color: "attention" },
  T: { name: "dollar-sign", color: "shape" },
};
const HighlightCard = ({
  amount,
  title,
  lastTransition,
  type,
}: HighlightCardProps) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type].name} color={icon[type].color} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransition}</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighlightCard;